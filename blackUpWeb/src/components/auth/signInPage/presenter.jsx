import { Button, Input } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../../common/util/container';

const Presenter = (props) => {
    const { id, setId, pwd, setPwd , sendBtn} = props;

    return(
        <Container>
            <div  style={{textAlign:'center', marginTop:'7rem'}}>
             <span className="title">Login</span>
            </div>
            <div className="signInBox">
            <Input 
            value={id}
            onChange={(e) => setId(e.target.value)}
            type="text" />
            <Input 
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            type="password" />
            <div style={{marginTop:'2rem'}}>
                <Button className="loginBtn" onClick={sendBtn} >login</Button>
                <Link to="/signUp">
                <Button className="joinusBtn">Join us</Button>
                </Link>
            </div>
            </div>
        </Container>    
    )};

export default Presenter;