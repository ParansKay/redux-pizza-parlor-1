import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';


function _template() {
  
  // const reducerName = useSelector(store => store.reducerName);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>_template</h1>
    </div>
  )
}

export default _template;