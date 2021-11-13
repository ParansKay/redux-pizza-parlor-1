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
import 'bootstrap/dist/css/bootstrap.min.css';

// reducer
// creating a global variable "pizza", that is given a state and action 
// every time an action takes place, it will run the reducer
const pizzaListReducer = (state = [], action) => {
  if (action.type === 'GET_PIZZA_LIST') {
    return action.payload;
  }
  return state;
}; // end pizzaListReducer

// a store
const storeInstance = createStore(
    combineReducers(
      {
        pizzaListReducer
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