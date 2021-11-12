import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import axios from 'axios';

// reducer
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