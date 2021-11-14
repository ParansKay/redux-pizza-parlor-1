import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';


function Header() {

  
  
  // const reducerName = useSelector(store => store.reducerName);
  const cart = useSelector(store => store.cart);
  const dispatch = useDispatch();



  console.log( cart );
  return (
    <div>
      <h1> Prime Pizza Test </h1>
    </div>
  )
}

export default Header;