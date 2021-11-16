import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';
import axios from 'axios';


function PizzaList(props) {

   const dispatch = useDispatch(); 
   
  // const reducerName = useSelector(store => store.reducerName);
  const pizzaListReducer = useSelector(store => store.pizzaListReducer);


  // const getPizzas =() =>{
  //   axios.get( '/api/pizza' ).then (( response )=>{
  //     console.log( 'back from GET:', response.data )
  //   })
  //   .catch( ( err )=>{
  //     alert( 'uh oh' );
  //   })
  // }
  

  return (
    <div>
      <h1>PizzaList</h1>
      {/* <p>{JSON.stringify(pizzaListReducer)}</p> */}
      <div id="pizzaList">    
      </div>
      {/* map through the pizzaListReducer and display each result in a PizzaItem component */}
      {pizzaListReducer.map( pizza =>(<PizzaItem className="itemBox" pizza={pizza} key={pizza.id}/>))}

{/* <button onClick={ getPizzas }>Test</button> */}

    </div>

    
  )
}

export default PizzaList;

