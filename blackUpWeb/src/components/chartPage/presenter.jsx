import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../common/util/container';
import displayImg from '../../common/assets/img/mainPage/displayImg0.jpeg';
import { Button, CardTitle,Row, Col, InputGroup, Label, Form, Table, Card, CardBody } from 'reactstrap';



const Presenter = (props) => {
  
  return (
    <Container>
        <div style={{textAlign:'center'}}>
            <span className="title">CHART</span>
        </div>
        <OrderDetailForm {...props}/>
{/* 
        <Link to={`/orderForm/${itemDetailInfo.prod_id}`}>
                    <Button className="blackButton">BUY NOW</Button>
        </Link> */}

    
    </Container>
  );
};

export default Presenter;



const OrderDetailForm = (props) => {
  const {prod_id, prod_name, prod_img, price, empty_val, total_price, email, setEmail, list=[] } = props
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

{list.map((data,idx) =>
  <tr>
  <th scope="row">{idx+1}</th>
    <td>
      <img width={150} src={data.prod_img}>
      </img>
    </td>
    <td>{data.prod_name}</td>
    <td>{data.price}</td>
    <td>{data.empty_val}</td>
    <td>{data.total_price} won</td>
  </tr>
  
  )}


    </tbody>
  </Table>
  )
}
