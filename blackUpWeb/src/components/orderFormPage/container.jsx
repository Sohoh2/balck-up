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

const prod_id = sessionStorage.getItem('prod_id');
const total_price = sessionStorage.getItem('total_price');
const empty_val = sessionStorage.getItem('empty_val');
const prod_img = sessionStorage.getItem('prod_img');
const prod_name = sessionStorage.getItem('prod_name');
const price = sessionStorage.getItem('price');

useEffect(() => {
  var IMP = window.IMP; 
  console.log(IMP)
  IMP.init("imp79959941");
}, [])


  const CreateOrder = () => {
    const value = localStorage.getItem('accessToken');
    console.log("토큰=>", value)


  IMP.request_pay({
	merchant_uid : 'merchant_' + new Date().getTime(),
	name : '결제테스트',
	amount : 1000,
	buyer_email : email,
	buyer_name : name,
	buyer_tel : phone,
	buyer_addr : address,
	buyer_postcode : '123-456'
}, function(rsp) {
	if ( rsp.success ) {
		var msg = '결제가 완료되었습니다.';
		msg += '고유ID : ' + rsp.imp_uid;
		msg += '상점 거래ID : ' + rsp.merchant_uid;
    
    // 주문생성  post 

    fetch("http://localhost:8080/order", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    

    var myHeaders = new Headers();

    myHeaders.append("Authorization", `Bearer ${value}`);
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "mem_id": 20,
      "phone": phone,
      "address": address,
      "name": name,
      "description": description,
      "products": [
        {
          "prod_id": prod_id,
          "order_quantity": empty_val
        },
      ]
    });

	} else {
		var msg = '결제에 실패하였습니다.';
		msg += '에러내용 : ' + rsp.error_msg;
    console.log(rsp)
	}
});
  }



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
        phone={phone}
        setPhone={setPhone}
        address={address}
        setAddress={setAddress}
        email={email}
        setEmail={setEmail}
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        products={products}
        setProduct={setProduct}
        CreateOrder={CreateOrder}
        prod_id={prod_id}
        empty_val={empty_val}
        prod_img={prod_img}
        prod_name={prod_name}
        price={price}
        total_price={total_price}
        />
    
            
    )};

export default Container;