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
const pizzaListReducer = (state = [], action) => {
  if (action.type === 'GET_PIZZA_LIST'){
    return action.payload;
  }
  return state;
}; // end pizzaListReducer


const cart = (state = [], action) => {
  state = [...state, {id:2, name:"Onomatopizza",description:"We start with a WHOMP of dough, SPLAT some marinara on it, PLOP enough cheese on there to make a mouse PEEP. Top it off with some SIZZLING bacon, and BOOM there it is! We guarantee you'll SMACK your lips.",price:80.99,image_path:"images/onomatopizza.jpeg"},{id:3, name:"Pepperoni",description:"Classic pizza with cheese and pepperoni. Baked with a traditional crust in our brick oven.",price:14.99,image_path:"images/pepperoni.png"},{id:4, name:"Over the Rainbow",description:"Taste the rainbow! One ingredient of each color: pepperoni, doritos, pineapple, olives, cheese, peppers and onion. Complimentary water served in a spray bottle to taste an actual rainbow.",price:19.99,image_path:"images/over_the_rainbow.jpeg"}]
    return state;
  }; // end pizzaListReducer

// a store
const storeInstance = createStore(
    combineReducers(
      {
        pizzaListReducer,
        cart
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