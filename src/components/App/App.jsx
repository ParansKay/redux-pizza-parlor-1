import React from 'react';
import axios from 'axios';
import '../App/App.css'
import PizzaList from '../PizzaList/PizzaList';
import { useState, useEffect } from 'react';
import CheckOut from '../Checkout/Checkout';
import Admin from '../Admin/Admin';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header'





function App(props) {
  useEffect(() => {
    console.log('in useEffect');
    getPizzaList();
  }, []);


  const dispatch = useDispatch(); //this code allows us to call the redux listener

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
    <div>
      <Header />
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PizzaList />} ></Route>
            <Route path="/checkout" element={<CheckOut />} ></Route>
            <Route path="/admin" element={<Admin />} ></Route>
            <Route path="/customerInfo" element={<CustomerInfo />} ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>

  );
}

export default App;
