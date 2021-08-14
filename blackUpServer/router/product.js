const express = require("express");
const router = express.Router();
const connection = require("../connection");
const { verifyAccessToken } = require("../util/utilFunction");

/**
 * TODO Swagger UI 연결하도록
 */

router.get("/category",async (req, res) => {

      const SQL = "SELECT * FROM category";

      connection.query(
        SQL,
        null,
        function (err, result = [], fields) {
          if (err) {
            return res.status(400).json({
              status: "error",
              error: "req body cannot be empty",
            });
          } else {
            console.log("결과",result);
              return res.status(200).json({
                  status: "success",
                  data: result
              });     
          }
        }
      );
});

/**
 * 카테고리 별 아이템들
 */
router.get("/category/:id/items",async (req, res) => {

      const SQL = "select * from product p left join inventory i on p.prod_id = i.prod_id where cate_id=?";

      connection.query(
        SQL,
        [req.params.id],
        function (err, result = [], fields) {
          if (err) {
            return res.status(400).json({
              status: "error",
              error: "req body cannot be empty",
            });
          } else {
            console.log("결과",result);
              return res.status(200).json({
                  status: "success",
                  data: result
              });     
          }
        }
      );

});

/**
 * 아이템 정보
 */
router.get("/item/:id",async (req, res) => {
      const SQL = "select * from product p left join inventory i on p.prod_id = i.prod_id where i.prod_id=?";

      connection.query(
        SQL,
        [req.params.id],
        function (err, result = [], fields) {
          if (err) {
            console.log(err)
            return res.status(400).json({
              status: "error",
              error: "req body cannot be empty",
            });
          } else {
            console.log("결과",result);
              return res.status(200).json({
                  status: "success",
                  data: result.length > 0 ? result[0] : {}
              });     
          }
        }
      );

});

module.exports = router;
