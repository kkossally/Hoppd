import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SplashNav from './splash_nav.jsx';
import NavBar from './navbar.jsx';

export default () => {
  return (
    <Switch>
      <Route exact path='/' component={SplashNav} />
      <Route path='/' component={NavBar} />
    </Switch>
  )
}