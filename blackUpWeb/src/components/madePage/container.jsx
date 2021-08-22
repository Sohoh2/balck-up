import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Presenter from './presenter';

const Container = (props) => {
  console.log('props ======>', props );
  console.log('match ========>', props.match.params.cate_id);

    const [topItemList, setTopItemList] = useState([]);
    const [bottomItemList, setBottomItemList] = useState([]);

    console.log(localStorage.getItem('accessToken'))
    const cate_id = props.match.params.cate_id;

    useEffect(() => {
      menuListFetch();
      console.log(window.location.pathname);
      console.log('history');
    }, [cate_id]);
  
    const menuListFetch = () => {
    
      axios
        .get(`http://localhost:8080/prod/category/${cate_id}/items`)
        .then((response) => response)
        .then((res) => {
          console.log(res.data.data);
          if(res.data.data[0].cate_id === 1){
            setTopItemList(res.data.data);
          }
          if(res.data.data[0].cate_id === 2) {
            setBottomItemList(res.data.data)
          }
          console.log('topItemList',topItemList);
          console.log('bottom',bottomItemList);
        }) 
        .catch((error) => console.log('error', error));
    };
    return(
        <Presenter 
        {...props}
        topItemList={topItemList}
        setTopItemList={setTopItemList}
        bottomItemList={bottomItemList}
        setBottomItemList={setBottomItemList}
        />
    
            
    )};

export default Container;