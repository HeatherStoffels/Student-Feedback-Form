import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";

import { createStore } from "redux";
import { Provider } from "react-redux";
// import Axios from "axios";

// import registerServiceWorker from './registerServiceWorker';

const firstReducerInitialState = {};


const firstReducer = (state = firstReducerInitialState, action) => {
  //   console.log("in firstReducer");
  if (action.type === "feeling") {
    console.log("in first reducer", action, state);
    return { ...state, feeling: action.payload };
  } else if (action.type === "understanding") {
      console.log("in first reducer" , action.type, state);
    return { ...state, understanding: action.payload };
  } else if (action.type === "support") {
    console.log("in first reducer" , action.type, state);
    return { ...state, support: action.payload};
  } else if (action.type === "comments") {
    console.log("in first reducer" , action.type, state);
    return { ...state, comments: action.payload };
  }
  
};

const storeInstance = createStore(firstReducer);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// registerServiceWorker();
