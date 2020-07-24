import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util'; 
import Splash from '../session/splash';
import SignupFormContainer from '../session/signup_form_container';
import LoginFormContainer from '../session/login_form_container';
import Header from './header';
import Content from './content';

const MainComponent = () => {

    return (
      <>
        <Header />
        <div id="background">
          <ProtectedRoute path='/' component={Content} />
        </div>
      </>
    )

}

export default MainComponent;