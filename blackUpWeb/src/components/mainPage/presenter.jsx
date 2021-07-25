import React, { useState } from 'react';
import Container from '../../common/util/container';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import { Row, Col } from 'antd';
import bannerImg from '../../common/assets/img/mainPage/bannerImg.jpeg';
import autoSlideImg0 from '../../common/assets/img/mainPage/autoSlideImg0.jpeg';
import autoSlideImg1 from '../../common/assets/img/mainPage/autoSlideImg1.jpeg';
import autoSlideImg2 from '../../common/assets/img/mainPage/autoSlideImg2.jpeg';
import autoSlideImg3 from '../../common/assets/img/mainPage/autoSlideImg3.jpeg';
import autoSlideImg4 from '../../common/assets/img/mainPage/autoSlideImg4.jpeg';
import displayImg0 from '../../common/assets/img/mainPage/displayImg0.jpeg';
import displayImg1 from '../../common/assets/img/mainPage/displayImg1.jpeg';
import displayImg2 from '../../common/assets/img/mainPage/displayImg2.jpeg';
import displayImg3 from '../../common/assets/img/mainPage/displayImg3.jpeg';


const Presenter = (props) => {
  return (
    <>
      <Banner />
      <Container>
        <AutoSlide {...props} />
        <RecentHotItem {...props} />
      </Container>
    </>
  );
};

export default Presenter;

const Banner = () => {
  return (
    <div>
      <img className="bannerImg" src={bannerImg} />
    </div>
  );
};

const AutoSlide = () => {
  const slideImages = [
    {
      data: autoSlideImg0,
    },
    {
      data: autoSlideImg1,
    },
    {
      data: autoSlideImg2,
    },
    {
      data: autoSlideImg3,
    },
    {
      data: autoSlideImg4,
    },
  ];

  const properties = {
    duration: 3000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    indicators: true,
  };
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <Slide {...properties}>
          {slideImages.map((img, idx) => (
            <img src={img.data} className="slideImg" />
          ))}
        </Slide>
      </div>
    </div>
  );
};

const RecentHotItem = () => {
  const style = { padding: '8px 0' };

  const displayImages = [
    {
      data: displayImg0,
    },
    {
      data: displayImg1,
    },
    {
      data: displayImg2,
    },
    {
      data: displayImg3,
    }
  ];

  return (
    <div>
      <span className="title">Recent Hot Item</span>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {displayImages.map((img,idx) =>(
                      <Col className="gutter-row" span={6}>
                      <div style={style}>
                          <img 
                          src={img.data}
                          className="displayImg"/>
                      </div>
                    </Col>
          ))}
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {displayImages.map((img,idx) =>(
                      <Col className="gutter-row" span={6}>
                      <div style={style}>
                          <img 
                          src={img.data}
                          className="displayImg"/>
                      </div>
                    </Col>
          ))}
      </Row>
    </div>
  );
};
