import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';
import * as CheckinActions from './actions/checkin_actions';

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
  window.fetchCheckins = CheckinActions.fetchCheckins;
  window.fetchCheckin = CheckinActions.fetchCheckin;
  window.createCheckin = CheckinActions.createCheckin;
  window.deleteCheckin = CheckinActions.deleteCheckin;
  window.clearCheckinErrors = CheckinActions.clearCheckinErrors;
  //TESTING
  
  
  ReactDOM.render(<Root store={store}/>, root);
});