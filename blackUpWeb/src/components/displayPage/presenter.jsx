import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../common/util/container';
import displayImg from '../../common/assets/img/mainPage/displayImg0.jpeg';
import { Button, Row, Col, InputGroup, Label, Form } from 'reactstrap';



const Presenter = (props) => {
  const {
    itemDetailInfo,
    empty_val,
    setempty_val
  } = props;

  return (
    <Container>
      { window.location.pathname === `/display/${itemDetailInfo.prod_id}`?
        <Form>
      <Row >
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
                      value={empty_val}
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
                </div>
              </Col>
              <Col>{itemDetailInfo.price} won</Col>
            </Row>
            <hr />

            <Row>
              <div>TOTAL PRICE({empty_val}) {itemDetailInfo.price * empty_val} won(1개)</div>
              <div>
                <Button className="blackButton">BUY NOW</Button>
                <Button className="greyButton">ADD TO CART</Button>
              </div>
            </Row>
            <hr />
        </Col>
      </Row>
      </Form>
      :
      <div>
        정보 없음
      </div>
                    }
    </Container>
  );
};

export default Presenter;

