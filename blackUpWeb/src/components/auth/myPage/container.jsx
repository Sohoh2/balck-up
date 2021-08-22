import React, { useEffect, useState } from 'react';
import Presenter from './presenter';
import axios from 'axios';


const Container = (props) => {
    const [userInfo, setUserInfo] = useState([]);
    

    useEffect(()=>{

        const accessToken = localStorage.getItem('accessToken');

        
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${accessToken}`);
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch("http://localhost:8080/auth/info", requestOptions)
          .then(response => response.json())
          .then(result => {
              console.log('마이페이지 result',result.data[0])
              setUserInfo(result.data[0]); 
            
            })
          .catch(error => console.log('error', error));


    },[])

 

    return(
        <Presenter
        userInfo = {userInfo}

        />
    
            
    )};

export default Container;