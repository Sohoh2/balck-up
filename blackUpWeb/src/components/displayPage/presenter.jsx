import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../common/util/container';
import displayImg from '../../common/assets/img/mainPage/displayImg0.jpeg';
import { Button, Row, Col, InputGroup, Label, Form } from 'reactstrap';



const Presenter = (props) => {
  const {
    price,
    setPrice,
    description,
    setDescriptions,
    totalPrice,
    setTotalPrice,
    qty,
    setQty,
  } = props;
  const [empty_val, setempty_val] = useState(0);

  return (
    <Container>
        <Form>
      <Row >
        <Col>
            <img src={displayImg} className="displayDetailImg" />
        </Col>
        <Col>
            <div>[MADE]{description}</div>
            <hr />
            <Row>
              <Col>Price</Col>
              <Col>{price}won</Col>
            </Row> 
            <hr />
            <Row>
              <Col>[MADE]{description} *</Col>
              <Col>
                <div className="mb-3">
                  <Label>Init with empty value:</Label>
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
              <Col>{price} won</Col>
            </Row>
            <hr />

            <Row>
              <div>TOTAL PRICE(qty) {totalPrice} won(1개)</div>
              <div>
                <Button className="blackButton">BUY NOW</Button>
                <Button className="greyButton">ADD TO CART</Button>
              </div>
            </Row>
            <hr />
        </Col>
      </Row>
      </Form>
    </Container>
  );
};

export default Presenter;

