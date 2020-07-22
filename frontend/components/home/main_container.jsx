import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util'; 
import Splash from '../session/splash';
import SignupFormContainer from '../session/signup_form_container';
import LoginFormContainer from '../session/login_form_container';
import Content from './content';

const MainComponent = () => {

    return (
      /* Eventually, this page is going to have to be switch between auth and 
      protected versions of the header. Visitors will be able to visit the beer
      search results, show page and top rated components without logging in */
      <>

        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />

        <div className="page">
          <ProtectedRoute path='/' component={Content} />
          {/* <Switch> */}
            {/* <Route path="/" component={Content} /> This will become the search results page */}
            {/* This will contain more routes to other pages besides beer show */}
          {/* </Switch> */}
        </div>
      </>
    )

}

export default MainComponent;