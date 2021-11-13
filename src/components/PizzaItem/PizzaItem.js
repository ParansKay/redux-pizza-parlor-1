import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';

let PizzaItems = []

function PizzaItem(props) {

  // const reducerName = useSelector(store => store.reducerName);

  const PizzaToSend = {
    id: props.pizza.id,
    name: props.pizza.name,
    price: props.pizza.price
  }


  const dispatch = useDispatch();


  return (
    <div className="pizzaItem">
      <img className="pizzaItemImage" src={props.pizza.image_path}></img>
      <h3>{props.pizza.name}</h3>
      <h5 className="pizzaDescription">{props.pizza.description}</h5>
      <div className="pizzaItemButton">
        <h4>${props.pizza.price}</h4>
        <Button variant="contained" color="primary" size="small" onClick={() => dispatch({ type: 'ADD_TO_CART', payload: props.pizza })}>Add to Cart</Button>
      </div>
    </div >
  )
}

export default PizzaItem;