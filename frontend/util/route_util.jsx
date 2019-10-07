import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route path={path} exact={exact} render={ props => { 
      return !loggedIn ? <Component {...props} /> : <Redirect to="/beers" />
    }}/>
  );
}

const Protected = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route path={path} exact={exact} render={ props => { 
      return loggedIn ? <Component {...props} /> : <Redirect to="/login" />
    }}/>
  );
}

const msp = state => {
  return {
    loggedIn: Boolean(state.session.id)
  }
}

export const AuthRoute = withRouter(connect(msp)(Auth));
export const ProtectedRoute = withRouter(connect(msp)(Protected));