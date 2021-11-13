import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';

let PizzaItems=[]

function PizzaItem(props) {
  
  // const reducerName = useSelector(store => store.reducerName);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>PizzaItem</h1>
      <p>{JSON.stringify(props.pizza)}</p>
      <p>style this</p>
    </div>
  )
}

export default PizzaItem;