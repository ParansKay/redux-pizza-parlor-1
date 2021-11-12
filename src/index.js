import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
//import redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger'; //this essentially acts as a console log 
import axios from 'axios';

// reducer
// creating a global variable "pizza", that is given a state and action 
// every time an action takes place, it will run the reducer
const pizza = (state = "I love pizza", action) => {
    console.log("I'm in pizza!", action);
    return state;
}

// a store
const storeInstance = createStore(
    combineReducers(
      {
        pizza
      }
    ),
    applyMiddleware(
      logger
    )
  );

ReactDOM.render(
    <React.StrictMode>
    <Provider store={storeInstance}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root'));

  reportWebVitals();