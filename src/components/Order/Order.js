import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';


function Order(props) {

  // const reducerName = useSelector(store => store.reducerName);
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{props.order.customer_name}</td>
      <td>{props.order.total}</td>
      <td>{props.order.time}</td>
    </tr>
  )
}

export default Order;