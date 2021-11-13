import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';


function Header() {
  
  // const reducerName = useSelector(store => store.reducerName);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Header</h1>
      <p>Test</p>
    </div>
  )
}

export default Header;