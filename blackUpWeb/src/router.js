import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MyPage from './components/auth/myPage';
import SignInPage from './components/auth/signInPage';
import SignUpPage from './components/auth/signUpPage';
import ChartPage from './components/chartPage';
import DisplayPage from './components/displayPage';
import MadePage from './components/madePage';
import MainPage from './components/mainPage';
import Navigation from './components/navigation';
import OrderFormPage from './components/orderFormPage';


const Router = (props) => {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route exact path='/' component={MainPage} />
                <Route exact path='/signUp' component={SignUpPage} />
                <Route exact path='/signIn' component={SignInPage} />
                <Route exact path='/myPage' component={MyPage} />
                <Route exact path='/main' component={MainPage} />
                <Route exact path='/made/:cate_id' component={MadePage} />
                <Route exact path='/display/:prod_id' component={DisplayPage} />
                <Route exact path='/orderForm' component={OrderFormPage} />
                <Route exact path='/chart' component={ChartPage} />
                <Route component={MainPage} />
            </Switch>


        </BrowserRouter>

    )
};

export default Router;