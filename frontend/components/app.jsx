import React from "react";
import { Route } from 'react-router-dom';
import AuthRoute from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';

const App = () => (
  <div>
    <div>
      <Route exact path="/" component={GreetingContainer}></Route>
    </div>
    <div>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </div>
  </div>
);

export default App;