import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../common/util/container';
import displayImg from '../../common/assets/img/mainPage/displayImg0.jpeg';
import { Button, CardTitle,Row, Col, InputGroup, Label, Form, Table, Card, CardBody } from 'reactstrap';



const Presenter = (props) => {
  
  return (
    <Container>
        <div style={{textAlign:'center'}}>
            <span className="title">ORDER</span>
        </div>
        <OrderDetailForm {...props}/>
        <UserDetailForm {...props}/>

    
    </Container>
  );
};

export default Presenter;



const OrderDetailForm = (props) => {
  const {prod_id, prod_name, prod_img, price, empty_val, total_price } = props
  return(
    <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>Image</th>
        <th>Product NAME</th>
        <th>PRICE</th>
        <th>QTY</th>
        <th>TOTAL</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      <th scope="row">1</th>
        <td>
          <img width={150} src={prod_img}>
          </img>
        </td>
        <td>{prod_name}</td>
        <td>{price}</td>
        <td>{empty_val}</td>
        <td style={{textAlign:'right'}}>total price : {total_price} won </td>

      </tr>
    </tbody>
  </Table>
  )
}

const UserDetailForm = (props) => {
  const {name, requestPay,CreateOrder, setName, setAddress, address, phone, setPhone, email, setEmail, setDescription, description} = props;


  
  return(
    <>
            <Row>
          <Col>
            <Card>
              <CardBody>
                <CardTitle className="h4">주문정보</CardTitle>


                <Row className="mb-3">
                  <label
                    htmlFor="example-text-input"
                    className="col-md-2 col-form-label"
                  >
                    Name
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </Row>
                <Row className="mb-3">
                  <label
                    htmlFor="example-search-input"
                    className="col-md-2 col-form-label"
                  >
                    Address
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="search"
                      placeholder="Enter your Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </Row>
                <Row className="mb-3">
                  <label
                    htmlFor="example-tel-input"
                    className="col-md-2 col-form-label"
                  >
                    Telephone
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="tel"
                      value={phone}
                      placeholder="Enter your Phone Number"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </Row>
                <Row className="mb-3">
                  <label
                    htmlFor="example-tel-input"
                    className="col-md-2 col-form-label"
                  >
                    Description
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="text"
                      value={description}
                      placeholder="Enter description"
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                </Row>
                {/* <Row className="mb-3">
                  <label
                    htmlFor="example-email-input"
                    className="col-md-2 col-form-label"
                  >
                    Email
                    </label>
                  <div className="col-md-10">
                    <input
                      className="form-control"
                      type="email"
                      value={email}
                      placeholder="Enter your Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </Row> */}
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Button onClick={CreateOrder}>send user data</Button>
        <button onClick={requestPay}>결제하기</button>


      
    </>
    )
}
