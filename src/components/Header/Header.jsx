import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';


function Header() {

  console.log( 'header!!!!!!');

  useEffect(() => {
    console.log('in header');
  }, []);
  
  // const reducerName = useSelector(store => store.reducerName);
  const cart = useSelector(store => store.cart);
  const dispatch = useDispatch();

  const[total, setTotal]=useState([]);

  // writing a function that maps through the cart 
  const totalCart = () =>{
    console.log('in totalCart');
    // mapping through cart with a spread operator
    // ...total is the existing value 
    // setTotal = total value + cart.price
    cart.map( setTotal( [...total, cart.price] ) )
  }


  return (
    <div>
      <h1> Prime Pizza Test</h1>

    </div>
  )
}

export default Header;