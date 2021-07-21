import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignInPage from './components/auth/signInPage';
import SignUpPage from './components/auth/signUpPage';
import MainPage from './components/mainPage';


const Router = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={MainPage} />
                <Route exact path='/' component={SignUpPage} />
                <Route exact path='/' component={SignInPage} />
                <Route component={MainPage} />
            </Switch>


        </BrowserRouter>

    )
};

export default Router;