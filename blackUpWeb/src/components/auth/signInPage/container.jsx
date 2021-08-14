import React, { useState } from 'react';
import Presenter from './presenter';
import axios from 'axios';
import CrytoJs from 'crypto-js';

const Container = (props) => {

    const {
        history
    } = props;

    const [id, setId] = useState("");
    const [pwd, setPwd] = useState('');
    console.log(id);
    console.log(pwd);

    const secretKey = 'Sunny';

    const encryptionData = (id, pwd) =>{
        const encrypted = CrytoJs.AES.encrypt(`${id}:${pwd}`, secretKey).toString();

        return encrypted;
        
    }

    const sendBtn = () => {

        const encrypted = encryptionData(id, pwd);

        

        console.log('auth==>', encrypted)

        alert('hello');
        axios.post('http://localhost:8080/auth/signin',{
            id,
            password: pwd
        })
        .then(rs => {
            history.push('/')
        })
        .catch(err => {
            alert(err)

        })
        

    }

    return(
        <Presenter
        {...props} 
        id={id}
        setId={setId}
        setPwd ={setPwd}
        pwd={pwd}
        sendBtn={sendBtn}
        />
    
            
    )};

export default Container;