const express = require("express");
const router = express.Router();
const connection = require("../connection");
const { verifyAccessToken, executeQuery } = require("../util/utilFunction");

/**
 * TODO: 주문생성시 order_detail에 물품리스트 들어가도록
 * 
 * 주문 결제 이후 inventory에서 물품리스트 order_quantity 만큼 차감하도록 로직 설정
 */

/**
 * 주문 생성
 */
router.post("/",async (req, res) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        console.log("wrong token format or token is not sended");
        return res.sendStatus(400);
    }

    const verifyResult = await verifyAccessToken(token, "access");
    if (verifyResult.id) {
        console.log(req.body)
      const SQL = "insert into shop_order(mem_id, order_status, phone, address, name, description, register_at) values (?,?,?,?,?,?,?);";
      const insertRs = await executeQuery(SQL, [req.body.mem_id, "INIT", req.body.phone, req.body.address, req.body.name, req.body.description || "", new Date().toISOString()]);

      if (insertRs.status === "success") {
        const SQL2 = "select * from shop_order where mem_id=? order by register_at DESC limit 1;"
        const selectRs = await executeQuery(SQL2, [req.body.mem_id]);

        const orderInfo = selectRs.data.length > 0 ? selectRs.data[0] : {}

        const DETAIL_SQL = "insert into shop_order_detail(order_id, prod_id, order_quantity, register_at) values(?,?,?,?)"
        req.body.products.forEach(prod => {
          executeQuery(DETAIL_SQL, [orderInfo.order_id, prod.prod_id, prod.order_quantity, new Date().toISOString()]);
        });

          return res.status(200).json({
              ...selectRs,
              data: orderInfo
          });     
      } else {
        return res.status(400).json(insertRs);
      }
    } else {
      return res.status(400).json({
          status: "fail",
          message: "unauthorized"
      });   
    }


});

/**
 * 주문 결제
 */
router.post("/paid", async (req, res) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        console.log("wrong token format or token is not sended");
        return res.sendStatus(400);
    }

    const verifyResult = await verifyAccessToken(token, "access");
    if (verifyResult.id) {

      const SQL = "insert into payment(order_id, amount_pay, register_at) values (?,?,?)";
      connection.query(
        SQL,
        [req.body.order_id, req.body.total_price, new Date().toISOString()],
        function (err, result = [], fields) {
          if (err) {
            return res.status(400).json({
              status: "error",
              error: "req body cannot be empty",
            });
          } else {
            console.log("결과",result);
            const SQL2 = "select * from payment where order_id=? order by register_at DESC limit 1;"
              connection.query(
                SQL2,
                [req.body.order_id],
                function (err, result = [], fields) {
                  if (err) {
                    return res.status(400).json({
                      status: "error",
                      error: "req body cannot be empty",
                    });
                  } else {
                    console.log("결과 페이먼트???",result);
                    const SQL3 = "update shop_order set order_status=?, pay_id=?, update_at=? where order_id=?"
                      connection.query(
                        SQL3,
                        ["PROGRESS", result[0].pay_id, new Date().toISOString(), req.body.order_id],
                        function (err, result = [], fields) {
                          if (err) {
                            return res.status(400).json({
                              status: "error",
                              error: "req body cannot be empty",
                            });
                          } else {
                            console.log("결과 페이먼트???",result);
                              return res.status(200).json({
                                  status: "success",
                              });     
                          }
                        }
                      );
                  }
                }
              );
          }
        }
      );

    } else {
      return res.status(400).json({
          status: "fail",
          message: "unauthorized"
      });   
    }

   
});

module.exports = router;
