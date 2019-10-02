import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import { signup, login, logout } from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");
  
  //TESTING
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //TESTING
  
  
  ReactDOM.render(<h2>Hello, World!</h2>, root);
  // ReactDOM.render(<Root store={store}/>, root);
});