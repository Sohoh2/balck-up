import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Presenter from './presenter';

const Container = (props) => {
    const [topItemList, setTopItemList] = useState([]);
    const [bottomItemList, setBottomItemList] = useState([]);

    useEffect(() => {
      menuListFetch();
      console.log(window.location.pathname)
    }, []);
  
    const menuListFetch = () => {
      axios
        .get('http://localhost:8080/prod/category/1/items')
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