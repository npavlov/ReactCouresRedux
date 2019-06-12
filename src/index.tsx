import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { IData } from "./Interfaces/IData";

const data: IData[] = [
  { id: 1, label: "test1", important: true, done: true },
  { id: 2, label: "test2", important: false, done: true },
  { id: 3, label: "test2", important: true, done: false },
  { id: 4, label: "clean my ass", important: true, done: false }
];

ReactDOM.render(<App toDo={data} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//test
