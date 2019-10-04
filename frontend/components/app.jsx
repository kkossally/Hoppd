import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './session/splash';
import SignupFormContainer from './session/signup_form_container';
import LoginFormContainer from './session/login_form_container';
import Home from './home/home';

export default () => (
  <div>
    <AuthRoute exact path="/" component={Splash} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/" component={Home} />

  </div>
);