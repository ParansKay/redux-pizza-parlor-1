import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';

let PizzaItems = []

function PizzaItem(props) {

  // const reducerName = useSelector(store => store.reducerName);
  const [buttonState, setButtonState] = useState(true);

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: props.pizza })
    setButtonState(false);

  }


  const dispatch = useDispatch();


  return (
    <div className="pizzaItem">
      <img className="pizzaItemImage" src={props.pizza.image_path}></img>
      <h3>{props.pizza.name}</h3>
      <h5 className="pizzaDescription">{props.pizza.description}</h5>
      <div className="pizzaItemButton">
        <h4>${props.pizza.price}</h4>
        {buttonState == true ?
          <Button variant="contained" color="primary" size="small" onClick={addToCart}>Add to Cart</Button> :
          <Button variant="contained" color="primary" size="small" onClick={addToCart} disabled>Add to Cart</Button>
        }
      </div>
    </div >
  )
}

export default PizzaItem;