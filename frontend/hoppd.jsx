import React from "react";
import ReactDOM from "react-dom";
// import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  // const store = configurestore();
  const root = document.getElementById("root");
  ReactDOM.render(<h2>Hello, World!</h2>, root);
  // ReactDOM.render(<Root store={store}/>, root);
});