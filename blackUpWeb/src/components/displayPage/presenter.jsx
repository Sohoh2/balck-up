import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../common/util/container';
import displayImg from '../../common/assets/img/mainPage/displayImg0.jpeg';
import { Button, Row, Col, InputGroup, Label, Form } from 'reactstrap';

const Presenter = (props) => {
  const { itemDetailInfo, empty_val, setempty_val, totalPrice, totalPriceCal } =
    props;

  return (
    <Container>
      {window.location.pathname === `/display/${itemDetailInfo.prod_id}` ? (
        <Form>
          <Row>
            <Col>
              <img src={itemDetailInfo.prod_img} className="displayDetailImg" />
            </Col>
            <Col>
              <div>[MADE]{itemDetailInfo.prod_name}</div>
              <hr />
              <Row>
                <Col>Price</Col>
                <Col>{itemDetailInfo.price}won</Col>
              </Row>
              <hr />
              <Row>
                <Col>[MADE]{itemDetailInfo.prod_name} *</Col>
                <Col>
                  <div className="mb-3">
                    <Row>
                      <Label>잔여수량{itemDetailInfo.inventory_quantity}</Label>
                      <InputGroup>
                        <div
                          className="input-group-append"
                          onClick={() => {
                            setempty_val(empty_val - 1);
                          }}
                        >
                          <Button type="button" color="primary">
                            -
                          </Button>
                        </div>
                        <input
                          type="number"
                          className="form-control"
                          style={{ width: '50%' }}
                          value={empty_val}
                          onChange={(e) => {
                            setempty_val(e.target.value);
                            {
                              totalPriceCal;
                            }
                          }}
                          placeholder="number"
                          readOnly
                        />
                        <div
                          className="input-group-append"
                          onClick={() => {
                            setempty_val(empty_val + 1);
                          }}
                        >
                          <Button type="button" color="primary">
                            +
                          </Button>
                        </div>
                      </InputGroup>
                    </Row>
                  </div>
                </Col>
                <Col>{itemDetailInfo.price} won</Col>
              </Row>
              <hr />

              <Row>
                <div>
                  TOTAL PRICE({empty_val}) {totalPrice} won(1개)
                </div>
                <div>
                  {/* <Link to={`/orderForm/${itemDetailInfo.prod_id}`}> */}
                  <Link to='/orderForm'>
                    <Button className="blackButton">BUY NOW</Button>
                  </Link>
                  <Link to='/chart'>
                  {/* <Link to={`/chart/${itemDetailInfo.prod_id}`}> */}
                    <Button className="greyButton">ADD TO CART</Button>
                  </Link>
                </div>
              </Row>
              <hr />
            </Col>
          </Row>
        </Form>
      ) : (
        <div>정보 없음</div>
      )}
    </Container>
  );
};

export default Presenter;
