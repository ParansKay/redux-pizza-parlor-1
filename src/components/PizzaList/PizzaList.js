import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import PizzaItem from '../PizzaItem/PizzaItem';
import Button from '@mui/material/Button';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


function PizzaList(props) {

  const dispatch = useDispatch();


  // const [buttonState, setButtonState] = useState(null);


  // const getCustomerInfo = () => {
  //   dispatch({ type: 'CUSTOMER_INFO'});

  //   setButtonState(buttonState);

  // }

  // const reducerName = useSelector(store => store.reducerName);
  const pizzaListReducer = useSelector(store => store.pizzaListReducer);

  return (
    <div>
      <div id="pizzaListButtonDiv">
        <Link to="/customerinfo"><Button className="pizzaListButton" variant="contained" color="secondary" size="medium">
          Customer Info
        </Button>
        </Link>

      </div>
      <div className="pizzaList">


        {/* <h1>PizzaList</h1>
      <p>{JSON.stringify(pizzaListReducer)}</p> */}
        {/* map through the pizzaListReducer and display each result in a PizzaItem component */}
        {pizzaListReducer.map(pizza => (<PizzaItem className="itemBox" pizza={pizza} key={pizza.id} />))}





      </div >
    </div>

  )
}

export default PizzaList;

// onClick={CustomerInfo}