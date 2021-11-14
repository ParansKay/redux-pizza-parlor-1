import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import React from 'react';
// import { Button } from '@material-ui/core'
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { flexbox } from '@mui/system';

let PizzaItems = []

function PizzaItem(props) {

  // const reducerName = useSelector(store => store.reducerName);
  const cart = useSelector(store => store.cart);
  console.log('cart -------->', cart);

  const [buttonState, setButtonState] = useState(true);

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: props.pizza });
    setButtonState(!buttonState);

  }


  const removeFromCart = () => {

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === props.pizza.id) {
        console.log('cart[i].id', cart[i].id, 'i:', i);
        dispatch({ type: 'REMOVE_FROM_CART', payload: i });
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


