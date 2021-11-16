import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';


function Order(props) {
  
  // const reducerName = useSelector(store => store.reducerName);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Order</h1>
      <p>Hello</p>
      <p>{props.order.total}</p>
    </div>
  )
}

export default Order;