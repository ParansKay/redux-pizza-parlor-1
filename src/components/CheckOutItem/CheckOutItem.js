import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';


function CheckOutItem() {
  
  // const reducerName = useSelector(store => store.reducerName);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>CheckOutItem</h1>
    </div>
  )
}

export default CheckOutItem;