import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import React from 'react';
// import material ui card styling 
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


function PizzaItem(props) {

  // const reducerName = useSelector(store => store.reducerName);
  const cart = useSelector(store => store.cart);
  console.log('cart -------->', cart);

  // set original button state to be true -- use in conditional operator later
  const [buttonState, setButtonState] = useState(true);

  // when AddToCart button is pressed, send dispatch to cart reducer with pizza info
  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: props.pizza });
    // change buttonState to false
    setButtonState(!buttonState);

  }


  // when Remove From Cart button is pressed, send pizza id to reducer for splicing
  const removeFromCart = () => {

    // check if id is within cart array - if so, send dispatch with index of id
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === props.pizza.id) {
        console.log('cart[i].id', cart[i].id, 'i:', i);
        dispatch({ type: 'REMOVE_FROM_CART', payload: {index: i, price: props.pizza.price} });
        // change buttonState to true
        setButtonState(!buttonState);
        return;
      }
    }


  }

  const dispatch = useDispatch();


  return (
    <div>
      <div className="pizzaItem" >
        <Card sx={{ maxWidth: 345, minHeight: 460, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <CardMedia
            component="img"
            height="200"
            image={props.pizza.image_path}
            alt={props.pizza.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.pizza.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.pizza.description}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              ${props.pizza.price}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            {buttonState == true ?
              <Button className="pizzItemButton" variant="contained" color="secondary" size="small" onClick={addToCart}>Add to Cart</Button> :
              <Button className="pizzItemButton" variant="contained" color="error" size="small" onClick={removeFromCart}>Remove from Cart</Button>
            }
          </CardActions>
        </Card>

      </div>

    </div>
  )
}

export default PizzaItem;


