import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from "redux";
import { Provider } from "react-redux";

// import registerServiceWorker from './registerServiceWorker';

const firstReducerInitialState = 0;

const firstReducer = (state = firstReducerInitialState, action) => {
  console.log("in firstReducer", state, action);

  return state;
};

const storeInstance = createStore(firstReducer);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// serviceWorker.unregister();



// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
