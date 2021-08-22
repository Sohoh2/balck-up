import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Presenter from './presenter';

const Container = (props) => {
    const [itemDetailInfo, setItemDetailInfo] = useState([])
    const [empty_val, setempty_val] = useState(1);
    const [price, setPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [prod_img, setProdImg] = useState('');
    const [prod_name, setProdName] = useState('');

    console.log('match<===========',props.match.params.prod_id);
    const prod_id = props.match.params.prod_id;


    // sessionStorage setting
    sessionStorage.setItem('empty_val', JSON.stringify(empty_val));
    sessionStorage.setItem('total_price', totalPrice);
    sessionStorage.setItem('prod_id', prod_id);
    sessionStorage.setItem('prod_img', prod_img);
    sessionStorage.setItem('prod_name', prod_name);
    sessionStorage.setItem('price', price);

    const totalPriceCal =  () => {

        setTotalPrice(price * empty_val);
      console.log('총 가격',totalPrice);
    }

    const menuListFetch = () => {
      axios
        .get(`http://localhost:8080/prod/item/${prod_id}`)
        .then((response) => response)
        .then((res) => {
          console.log('여기보셈',res.data.data);
          setItemDetailInfo(res.data.data);
          setProdImg(res.data.data.prod_img);
          setPrice(res.data.data.price);
          setProdName(res.data.data.prod_name);
        }) 
        .catch((error) => console.log('error', error));
    };


    useEffect(() => {
      menuListFetch();
      totalPriceCal();
    }, [empty_val, totalPrice]);
  
    return(
        <Presenter {...props}
        itemDetailInfo={itemDetailInfo}
        empty_val={empty_val}
        setempty_val={setempty_val}
        totalPrice={totalPrice}
        totalPriceCal={totalPriceCal}
        />
    
            
    )};

export default Container;