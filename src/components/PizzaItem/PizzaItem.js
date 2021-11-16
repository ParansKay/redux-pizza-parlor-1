import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';

let PizzaItems=[]

function PizzaItem(props) {
  
  // const reducerName = useSelector(store => store.reducerName);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{props.pizza.name}</h1>
      <p>description: {props.pizza.description}</p>
      <p>price: {props.pizza.price}</p>
      <img src={props.pizza.img_path} alt="img" />
    </div>
  )
}

export default PizzaItem;