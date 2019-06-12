import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import ToDoReducer from "./Reducer";
import { Provider } from "react-redux";

const store = createStore(ToDoReducer as any);

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(ReduxApp(), document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//test
