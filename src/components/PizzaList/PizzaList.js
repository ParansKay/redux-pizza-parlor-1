import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import PizzaItem from '../PizzaItem/PizzaItem';

function PizzaList() {

    let [currentCart, setCurrentCart] = useState([]);
    let [price, setPrice] = useState(0);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const reduxStore = useSelector(store => store);

    function setMenu() {
        axios.get('/api/pizza')
            .then(response => {
                // send to reducer so that we can access it from anywhere
                dispatch({ type: 'SET_MENU', payload: response.data })
            })
            .catch(error => {
                console.log('Error in GET MENU', error);
                alert('Bad in GET MENU');
            })
    }

    useEffect(() => {
        setMenu();
    }, []);

    function submitCart() {
        dispatch({ type: 'SET_CART', payload: currentCart });
        dispatch({ type: 'SET_PRICE', payload: price });
        navigate('/customerInfo');
    }

    return (
        <>
            
            <button className="nextButton" onClick={submitCart}> NEXT </button>
            
            <div className="menu">

                {reduxStore.pizzaListReducer.map((pizza) =>
                    <PizzaItem key={pizza.id}
                        pizza={pizza}
                        currentCart={currentCart}
                        setCurrentCart={setCurrentCart}
                        price={price}
                        setPrice={setPrice} />
                )}


            </div>
        </>
    )
}

export default PizzaList;