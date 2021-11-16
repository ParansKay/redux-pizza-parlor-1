import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';


function PizzaList(props) {

  const dispatch = useDispatch();

  // const reducerName = useSelector(store => store.reducerName);
  const pizzaListReducer = useSelector(store => store.pizzaListReducer);

  return (
    <div id="pizzaList">
      {/* <h1>PizzaList</h1>
      <p>{JSON.stringify(pizzaListReducer)}</p> */}
      {/* map through the pizzaListReducer and display each result in a PizzaItem component */}
      {pizzaListReducer.map(pizza => (<PizzaItem className="itemBox" pizza={pizza} key={pizza.id} />))}
    </div>
  )
}

export default PizzaList;