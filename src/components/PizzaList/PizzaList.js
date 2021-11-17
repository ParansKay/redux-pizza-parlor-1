import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';
import axios from 'axios';


function PizzaList(props) {

   const dispatch = useDispatch(); 
   
  // const reducerName = useSelector(store => store.reducerName);
  const pizzaListReducer = useSelector(store => store.pizzaListReducer);

  

  return (
    <div>
      <h1>PizzaList</h1>
      {/* <p>{JSON.stringify(pizzaListReducer)}</p> */}
      <div id="pizzaList">    
      </div>
      {/* map through the pizzaListReducer and display each result in a PizzaItem component */}
      {pizzaListReducer.map( pizza =>(<PizzaItem className="itemBox" pizza={pizza} key={pizza.id}/>))}

      <Link to="/customerinfo"><Button className="pizzaListButton" variant="contained" color="secondary" size="small">
              Customer Info
            </Button>
            </Link>

    </div>

    
  )
}

export default PizzaList;

