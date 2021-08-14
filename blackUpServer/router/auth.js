const express = require("express");
const router = express.Router();
const connection = require("../connection");
const { dycryptionData, encryptionData, generateAccessToken, generateRefreshToken, verifyAccessToken } = require("../util/utilFunction");

/**
 * @swagger
paths:
  /signup:
    post:
      summary: signup member
      requestBody:
        content:
          application/json:
            schema:      # Request body contents
              type: object
              properties:
                id:
                  type: integer
                name:
                  type: string
              example:   # Sample object
                id: 10
                name: Jessica Smith
      responses:
        '200':
          description: OK
 */
router.post("/signup", (req, res) => {

  if (req.body.id && req.body.password) {
      const SQL =
        "INSERT INTO member(id, password, register_at) VALUES(?,?,?)";
      connection.query(
        SQL,
        [req.body.id, req.body.password, new Date().toISOString()],
        function (err, result, fields) {
          if (err) {
            return res.status(400).json({
              status: "error",
              error: "req body cannot be empty",
            });
          } else {
            return res.status(200).json({
              status: "success"
            });
          }
        }
      );
  } else {
    return res.status(400).json({
          status: 'error',
          error: 'req body cannot be empty',
    }); 
  }
});

router.post("/signin", (req, res) => {
      console.log("data", req.body);

  if (req.body.id && req.body.password) {
      const SQL = "SELECT * FROM member where id=?";

      connection.query(
        SQL,
        [req.body.id],
        function (err, result = [], fields) {
          if (err) {
            return res.status(400).json({
              status: "error",
              error: "req body cannot be empty",
            });
          } else {
            console.log("결과",result);
            if (result.length > 0) {
                const selectedRs = result[0] || {};

                if (req.body.password === selectedRs.password) {
                      const accessToken = generateAccessToken(req.body.id);
                      const refreshToken = generateRefreshToken(req.body.id);

                    return res.status(200).json({
                        status: "success",
                        accessToken,
                        refreshToken
                    });     
                } else {
                    return res.status(200).json({
                        status: "success",
                        message: "incorrect email or password"
                    });
                }
            } else {
                return res.status(200).json({
                  status: "success",
                  message: "incorrect email or password"
                });
            }
          }
        }
      );
  } else {
    return res.status(400).json({
          status: 'error',
          error: 'req body cannot be empty',
    }); 
  }
});

// access token을 refresh token 기반으로 재발급
router.post("/refresh", async (req, res) => {
    let authHeader = req.headers.authorization;
    let refreshToken = authHeader && authHeader.split(" ")[1];
    if (!refreshToken) {
        console.log("wrong token format or token is not sended");
        return res.sendStatus(400);
    }

    const verifyResult = await verifyAccessToken(refreshToken, "refresh");
    if (verifyResult.id) {
      const accessToken = generateAccessToken(verifyResult.id);
      res.json({
        statusCode: "200",
        status: "success",
        accessToken
      });
    } else {
      res.json({
        statusCode: "403",
        status: "fail"
      });
    }
});

// access token 유효성 확인을 위한 예시 요청
router.get("/verify",async (req, res) => {

    let authHeader = req.headers.authorization;
    let token = authHeader && authHeader.split(" ")[1];
      console.log(authHeader)
    if (!token) {
        console.log("wrong token format or token is not sended");
        return res.sendStatus(400);
    }

    const verifyResult = await verifyAccessToken(token, "access");
    if (verifyResult.id) {
      res.json({
        statusCode: "200",
        status: "success"
      });
    } else {
      res.json({
        statusCode: "403",
        status: "fail"
      });
    }
    console.log("결과????", verifyResult.id);
});

module.exports = router;
