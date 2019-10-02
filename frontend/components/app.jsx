import React from "react";
import { Route } from 'react-router-dom';
import AuthRoute from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

const App = () => (
  <div>
    <header>
      <GreetingContainer />
      <h1>Hoppd</h1>
      <h3>Drink Like There's No Tomorrow</h3>
    </header>

    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;