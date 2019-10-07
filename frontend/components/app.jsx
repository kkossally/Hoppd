import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './session/splash';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import MainContainer from './home/main_container';

export default () => (
  <Switch>
    <AuthRoute exact path="/" component={Splash} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/beers" component={MainContainer} /> {/*this should not be 
    a protected route, but it should also not display along with the splash, 
    which it will if the hash routes are the same. Later on, this should route 
    to the search results page, from which visitors can access a beer show page, 
    but not an edit or check-in page*/}
  </Switch>
);