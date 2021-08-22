import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Presenter from './presenter';

const Container = (props) => {
const[memid, setMenId] = useState('');
const[phone, setPhone] = useState('');
const[address, setAddress] = useState('');
const[name, setName] = useState('');
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


const  requestPay = () => {
 IMP.request_pay({
	merchant_uid : 'merchant_' + new Date().getTime(),
	name : '결제테스트',
	amount : 14000,
	buyer_email : 'iamport@siot.do',
	buyer_name : '구매자',
	buyer_tel : '010-1234-5678',
	buyer_addr : '서울특별시 강남구 삼성동',
	buyer_postcode : '123-456'
}, function(rsp) {
	if ( rsp.success ) {
		var msg = '결제가 완료되었습니다.';
		msg += '고유ID : ' + rsp.imp_uid;
		msg += '상점 거래ID : ' + rsp.merchant_uid;
		msg += '결제 금액 : ' + rsp.paid_amount;
		msg += '카드 승인번호 : ' + rsp.apply_num;
	} else {
		var msg = '결제에 실패하였습니다.';
		msg += '에러내용 : ' + rsp.error_msg;
    console.log(rsp)
	}
});
}


  const CreateOrder = () => {
    const value = localStorage.getItem('accessToken');
    console.log("토큰=>", value)

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
          "prod_id": 1,
          "order_quantity": 3
        },
        {
          "prod_id": 4,
          "order_quantity": 2
        }
      ]
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:8080/order", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }



  const menuListFetch = () => {
    axios
      .get("http://localhost:8080/prod/item/1")
      .then((response) => response)
      .then((res) => {
        console.log(res.data.data);
        setItemDetailInfo(res.data.data)
  
      }) 
      .catch((error) => console.log('error', error));
  };


  useEffect(() => {
    menuListFetch();

    console.log(window.location.pathname)
  }, []);




   


    return(
        <Presenter {...props}
        memid={memid}
        setMenId={setMenId}
        phone={phone}
        setPhone={setPhone}
        address={address}
        setAddress={setAddress}
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        products={products}
        setProduct={setProduct}
        CreateOrder={CreateOrder}
        requestPay={requestPay}
        prod_id={prod_id}
        empty_val={empty_val}
        prod_img={prod_img}
        prod_name={prod_name}
        price={price}
        total_price={total_price}
        />
    
            
    )};

export default Container;