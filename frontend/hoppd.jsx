import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import * as FavoriteActions from './actions/favorite_actions';

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
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.createFavorite = FavoriteActions.createFavorite;
  window.deleteFavorite = FavoriteActions.deleteFavorite;
  window.clearFavoriteErrors = FavoriteActions.clearFavoriteErrors;
  //TESTING
  
  
  ReactDOM.render(<Root store={store}/>, root);
});