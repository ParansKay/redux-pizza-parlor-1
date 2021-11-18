import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import {Table}from 'react-bootstrap';
import {Button} from '@material-ui/core'

function CheckoutItem(props) {
  
  // const reducerName = useSelector(store => store.reducerName);
  const dispatch = useDispatch();

  return (
    <tr>
        <td>{props.pizza.name}</td>
        <td>{props.pizza.price}</td>
        </tr>

  )
}

export default CheckoutItem;