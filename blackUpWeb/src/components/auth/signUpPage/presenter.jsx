import React from 'react';
import Container from '../../../common/util/container';

const Presenter = (props) => {
    const { id, setId, pwd, setPwd , sendBtn} = props;

    return(
        
        <Container>
            <div>SignUp</div>
            <input 
            value={id}
            onChange={(e) => setId(e.target.value)}
            type="text" /><br/>
            <input 
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            type="password" /><br/>

            <button onClick={sendBtn}>SIGN UP</button>
        
        </Container>     
    )};

export default Presenter;