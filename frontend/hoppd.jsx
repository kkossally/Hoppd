import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import * as BeerApiUtil from './util/beers_api_util';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById("root");
  
  //TESTING
  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  window.fetchBeers = BeerApiUtil.fetchBeers;
  window.fetchBeer = BeerApiUtil.fetchBeer;
  window.createBeer = BeerApiUtil.createBeer;
  window.updateBeer = BeerApiUtil.updateBeer;
  window.deleteBeer = BeerApiUtil.deleteBeer;
  //TESTING
  
  
  ReactDOM.render(<Root store={store}/>, root);
});