import React from 'react';
import {Link} from 'react-router-dom'
import navigationLogoImg from '../../common/assets/img/navigation/navigationLogo.png'
const Presenter = (props) => {
    return(
        <div id="Navigation">
            <div>
                <Link to='/'>
                <img 
                src={navigationLogoImg}
                className="navigationLogoImg"/>
                </Link>
            </div>
            <div className="navigationMenus">
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div>
                        <Link className="navigationMenu" to="/made" >MADE</Link>
                        <Link className="navigationMenu" to="/display" >DISPLAY</Link>
                    </div>
                    <div>
                        <Link className="navigationMenu" to='/signIn'>LOGIN</Link>
                        <Link className="navigationMenu" to='/signUp'>JOIN</Link>
                        <Link className="navigationMenu" to='/signUp'>MYPAGE</Link>
                    </div>
                </div>
            </div>
        </div>    
    )};

export default Presenter;