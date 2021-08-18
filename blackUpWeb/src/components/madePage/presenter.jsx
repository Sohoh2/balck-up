import React from 'react';
import {Link} from 'react-router-dom'
import Container from '../../common/util/container';
import { Button, Row, Col, InputGroup, Label, Form } from 'reactstrap';
import displayImg0 from '../../common/assets/img/mainPage/displayImg0.jpeg';
import displayImg1 from '../../common/assets/img/mainPage/displayImg1.jpeg';
import displayImg2 from '../../common/assets/img/mainPage/displayImg2.jpeg';
import displayImg3 from '../../common/assets/img/mainPage/displayImg3.jpeg';

const Presenter = (props) => {
  const {bottomItemList  = [], topItemList  = []} = props;

    return(
        <>
            <Container>
                <div style={{textAlign:'center'}}>
                    <span className="title">MADE</span>
                </div>
                <ItemList 
                {...props}
                />
            </Container>
        </>    
    )};

export default Presenter;

const ItemList = (props) => {
  const {bottomItemList  = [], topItemList  = []} = props;


    
    const style = { padding: '4px 0', textAlign:'center'};


    return(
        <>

        {window.location.pathname === '/made/1' 
?      
        <Row >
        {topItemList.map((data,idx) =>(
                    <Col className="gutter-row" span={6}>
                    <div style={style}>
                    <Link className="navigationMenu" to={`/display/${data.prod_id}`} >
                        <img 
                        src={data.prod_img}
                        className="madeImg"/>
                        <div>{data.prod_name}</div>
                        <div>{data.price}won</div>
                        </Link>
                    </div>
                  </Col>
        ))}
    </Row>
    
    :
    <Row >
    {bottomItemList.map((data,idx) =>(
                <Col className="gutter-row" span={6}>
                <div style={style}>
                    <Link className="navigationMenu" to={`//display/${data.prod_id}`} >
                    <img 
                    src={data.prod_img}
                    className="madeImg"/>
                    <div>{data.prod_name}</div>
                    <div>{data.price}won</div>
                    </Link>
                </div>
              </Col>
    ))}
</Row>
    
    }
        {/* <Row >
        {displayImages.map((img,idx) =>(
                    <Col className="gutter-row" span={6}>
                    <div style={style}>
                    <Link className="navigationMenu" to="/display" >
                        <img 
                        src={img.data}
                        className="madeImg"/>
                        <div>{img.title}</div>
                        <div>{img.price}</div>
                        <div className="description">{img.description}</div>
                        </Link>
                    </div>
                  </Col>
        ))}
    </Row> */}
    </>
    )

}