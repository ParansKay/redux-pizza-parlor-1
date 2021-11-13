import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import "../Checkout/Checkout.css"


function Checkout() {
  
  // const reducerName = useSelector(store => store.reducerName);
  const dispatch = useDispatch();

  return (
    <div className="checkout-page">
      <h2>Step 3: Checkout</h2>
      <div className="userInfo-Delivery-Takeout">
        <div className="userInfo">
          <p>John Smith</p>
          <p>555 Applewood Lane</p>
          <p>Minneapolis, MN</p>
        </div>
        <div className="delivery-takeout">
          <p className="forDelivery">For Delivery/Takeout</p>
        </div>
      </div>
      
      
    </div>
  )
}

export default Checkout;