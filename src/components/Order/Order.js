import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';


function Order(props) {
  
  // const reducerName = useSelector(store => store.reducerName);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Order</h1>
      <tr>
        <th>Customer</th> 
        <th>Total</th> 
        <th>Time Ordered</th>
        </tr>
        <tr>
      <td><p>{props.order.customer_name}</p></td>
      <td><p>{props.order.total}</p></td>
      <td><p>{props.order.time}</p></td>
      </tr>
      </div>
  )
}

export default Order;