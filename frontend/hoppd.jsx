import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import * as BeerActions from './actions/beer_actions';

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
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchBeers = BeerActions.fetchBeers;
  window.fetchBeer = BeerActions.fetchBeer;
  window.createBeer = BeerActions.createBeer;
  window.updateBeer = BeerActions.updateBeer;
  window.deleteBeer = BeerActions.deleteBeer;
  window.clearBeerErrors = BeerActions.clearBeerErrors;
  //TESTING
  
  
  ReactDOM.render(<Root store={store}/>, root);
});