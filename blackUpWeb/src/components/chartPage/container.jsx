import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Presenter from './presenter';

const Container = (props) => {
const[memid, setMenId] = useState('');
const[phone, setPhone] = useState('');
const[address, setAddress] = useState('');
const[name, setName] = useState('');
const[email, setEmail] = useState('');
const[description, setDescription] = useState('');
const[products, setProduct] = useState([]);
const [itemDetailInfo,setItemDetailInfo] = useState([]);
const [list, setList] = useState([]);

const prod_id = sessionStorage.getItem('prod_id');
const total_price = sessionStorage.getItem('total_price');
const empty_val = sessionStorage.getItem('empty_val');
const prod_img = sessionStorage.getItem('prod_img');
const prod_name = sessionStorage.getItem('prod_name');
const price = sessionStorage.getItem('price');

useEffect(() => {
  const newArr = [];
    for (let index = 0; index < prod_id.length; index++) {
    newArr.push({
        total_price: total_price,
        empty_val: empty_val,
        prod_img : prod_img,
        prod_name : prod_name,
        price : price
    })
    setList(newArr);
}


}, [])



  const menuListFetch = () => {
    axios
      .get(`http://localhost:8080/prod/item/${prod_id}`)
      .then((response) => response)
      .then((res) => {
        console.log('주문디테일 보셈',res.data.data);
        setItemDetailInfo(res.data.data)
  
      }) 
      .catch((error) => console.log('error', error));
  };


  useEffect(() => {
    menuListFetch();
  }, []);





    return(
        <Presenter {...props}
        memid={memid}
        setMenId={setMenId}
        prod_id={prod_id}
        empty_val={empty_val}
        prod_img={prod_img}
        prod_name={prod_name}
        price={price}
        total_price={total_price}
        list={list}
        />
    
            
    )};

export default Container;