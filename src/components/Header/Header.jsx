import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';


function Header() {

  console.log( 'header!!!!!!');

  useEffect(() => {
    console.log('in header');
    totalCart();
  }, []);
  
  // const reducerName = useSelector(store => store.reducerName);
  const cart = useSelector(store => store.cart);
  const dispatch = useDispatch();

  const[total, setTotal] = useState([14.99, 14.99, 19.99]);
  // let total=[0];
  const getTotal = ()=>{
    console.log ('total', total);
  }
  
  
  // writing a function that maps through the cart 
  const totalCart = () =>{
    console.log('in totalCart');
    console.log( 'in cart------>', cart );

    for( let i=0; i<cart.length; i++){
      console.log( 'total is:', total );
      console.log( 'in for loop', i );
      console.log( Number(cart[i].price) );
      setTotal([...total, cart[i].price]) ;
    } // end for 
  }



  return (
    <div>
      <h1> Prime Pizza Test</h1>
      <p>total: {total}</p>
    <button onClick={getTotal}>Get Total</button>
    </div>
  )
}

export default Header;