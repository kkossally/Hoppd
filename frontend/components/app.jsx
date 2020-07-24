import React from "react";
import { Switch } from 'react-router-dom';
import Modal from './modal/modal';
import { AuthRoute } from '../util/route_util';
import Splash from './session/splash';
import MainContainer from './home/main_container';
import Footer from './home/footer';

export default () => (
  <div>
    <Modal />
    <Switch >
      <AuthRoute exact path="/" component={Splash} />
      <MainContainer />
    </Switch>
    <Footer />
  </div>
);