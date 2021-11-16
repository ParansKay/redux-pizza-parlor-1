import React from 'react';
import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 

// Components
import PizzaList from '../PizzaList/PizzaList';
import Admin from '../Admin/Admin';
import CheckOut from '../CheckOut/CheckOut';
import CheckOutItem from '../CheckOutItem/CheckOutItem'; 
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import Header from '../Header/Header';
import PizzaItem from '../PizzaItem/PizzaItem';



function App() {
  useEffect(() => {
    console.log('in useEffect');
    getPizzaList();
  }, []);
  
  
  const dispatch = useDispatch(); //this code allows us how we call the redux listener

  const getPizzaList = () => {
    axios.get('/api/pizza').then((res) => { 
        console.log('Successful AXIOS GET', res);
        dispatch({
          type: 'GET_PIZZA_LIST',
          payload: res.data,
        });
      }).catch((err) => {
        console.log('Error in AXIOS GET');
      });
  };


  return (
    <div className='App'>
      <header className='App-header'>
      <Header />
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <PizzaList /> } ></Route>
          <Route path="/checkout" element={ <CheckOut /> } ></Route>

          <Route path="/customerInfo" element={ <CustomerInfo /> } ></Route>
          <Route path="/admin" element={ <Admin /> } ></Route>

          
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
