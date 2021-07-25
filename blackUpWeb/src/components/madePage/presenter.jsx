import React from 'react';
import {Link} from 'react-router-dom'
import Container from '../../common/util/container';
import { Row, Col } from 'antd';
import displayImg0 from '../../common/assets/img/mainPage/displayImg0.jpeg';
import displayImg1 from '../../common/assets/img/mainPage/displayImg1.jpeg';
import displayImg2 from '../../common/assets/img/mainPage/displayImg2.jpeg';
import displayImg3 from '../../common/assets/img/mainPage/displayImg3.jpeg';

const Presenter = (props) => {
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


    
    const style = { padding: '4px 0', textAlign:'center'};

    const displayImages = [
        {
          data: displayImg0,
          title: '에이티 써머 밴딩 팬츠',
          price : '19,000 won',
          description : '최단기간 1.5만장 돌파!'
        },
        {
          data: displayImg1,
          title: '에이티 써머 밴딩 팬츠',
          price : '19,000 won',
          description : '최단기간 1.5만장 돌파!'
        },
        {
          data: displayImg2,
          title: '에이티 써머 밴딩 팬츠',
          price : '19,000 won',
          description : '최단기간 1.5만장 돌파!'
        },
        {
          data: displayImg3,
          title: '에이티 써머 밴딩 팬츠',
          price : '19,000 won',
          description : '최단기간 1.5만장 돌파!'
        }
      ];
    return(
        <>
        <Row  justify="space-around" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
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
    </Row>
    </>
    )

}