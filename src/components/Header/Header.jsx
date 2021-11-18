import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



function Header() {

  useEffect(() => {
    totalCart();
  }, []);
  
  // const reducerName = useSelector(store => store.reducerName);
  const cart = useSelector(store => store.cart);
  const cartTotal = useSelector(store => store.cartTotal);
  const dispatch = useDispatch();

  // to be used as a variable that holds the total of pizza prices
  const[total, setTotal] = useState();
  
  // writing a function that maps through the cart 
  //
  const totalCart = () =>{
    // creating a temporary variable
    let tempThing = 0;

    // looping through "cart"
    for( let i=0; i<cart.length; i++){
      // summing up the cart[i].price + the value of tempThing
      tempThing = tempThing + Number(cart[i].price);
    } // end for 
    // after the loop we set the value of total to tempThing
    setTotal(Math.round(tempThing*100)/100);
  
  }

  return (
    <div className='App'>
      <div className="header">
        <header className='App-header'>
          <table id="headerTable">
          {/* <colgroup>
            <col width="150">
            <col width="150">
            </colgroup> */}
            <tr className="borderTest">
              <th id="element1">Prime Pizza Test</th>
              {/* <th><ShoppingCartIcon/></th> */}
            </tr>
            <tr>
            <th id="element2" ><ShoppingCartIcon className="icon"/>total: ${cartTotal}</th>
            </tr>
          </table>
        </header>
      </div>    
    </div>
  )
}

export default Header;