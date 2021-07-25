import React from 'react';
import {Link} from 'react-router-dom'
import Container from '../../common/util/container';
import { Row, Col } from 'antd';
import displayImg from '../../common/assets/img/mainPage/displayImg0.jpeg'
import { InputNumber, Button } from 'antd';


const Presenter = (props) => {
    const{
        price, setPrice, description, setDescriptions, totalPrice, setTotalPrice, qty, setQty} = props;
    return(
        <Container >
                    <Row  justify="center">
                    <Col className="gutter-row" span={10}>
                    <div>
                        <img 
                        src={displayImg}
                        className="displayDetailImg"/>
                    </div>
                  </Col>
                  <Col className="gutter-row" span={7}>
                    <div>
                        <div>[MADE]{description}</div>
                        <hr />
                        <Row>
                            <Col>Price</Col>
                            <Col>{price}won</Col>
                        </Row>
                        <hr/>
                        <Row justify='space-around'>
                            <Col>
                            [MADE]{description} *
                            </Col>
                            <Col>
                                <InputNumber 
                                min={1}
                                max={9}
                                defaultValue={qty} 
                                onChange={(e) => setQty(e.target)}
                                 />
                            </Col>
                                <Col>{price} won</Col>
                        </Row>
                        <hr/>

                        <Row>
                            <div>
                            TOTAL PRICE(qty) {totalPrice} won(1개)
                            </div>
                            <div>
                            <Button className="blackButton">BUY NOW</Button>
                            <Button className="greyButton">ADD TO CART</Button>
                            </div>
                        </Row>
                        <hr/>

                    </div>
                  </Col>
    </Row>
            

        </Container>    
    )};

export default Presenter;
