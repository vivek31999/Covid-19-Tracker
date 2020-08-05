import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './Redux/Store';
import "./index.css";
import App from "./App";
import Main from "./Pages/Main";
import * as serviceWorker from "./serviceWorker";

const store = configureStore({
	reducer : rootReducer,
	middleware : [thunk]
})

ReactDOM.render(
  <Provider store={store}>
  	<React.StrictMode>
    	<App />
  	</React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
