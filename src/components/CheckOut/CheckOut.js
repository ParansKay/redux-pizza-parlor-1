import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import "../Checkout/Checkout.css"
import {Table}from 'react-bootstrap';
import {Button} from '@material-ui/core'
import axios from 'axios';
import CheckoutItem from '../CheckoutItem/CheckOutItem';
import { Link } from 'react-router-dom';
import ConfirmModal from './ConfirmModal';



function Checkout() {

  //bring cart & customer info items from the store 
  const cart = useSelector(store => store.cart);
  const customerInfo = useSelector(store => store.customerInfo);

  //create a variable that stores an object for the entire order 
  //pass the new order via props to ConfirmModal to be able to do the post req in CornfirmModal 
  const[ newOrder, setNewOrder ]=useState({
    customer_name: customerInfo.customer_name, 
    street_address: customerInfo.street_address,
    city: customerInfo.city,
    zip: customerInfo.zip,
    type: customerInfo.type,
    //waiting for Paran & Rachel to bring the total to the store 
    total: 20,
    pizzas: [{
      //need to figure out how to get the pizza id
      id: 3,
      quantity: 2
    }] 
})


  return (
    <div className="checkout-page">
      <Button variant="secondary"><Link to="/customerInfo">back</Link></Button>
      <h2>Step 3: Checkout</h2>
      <div className="userInfo-Delivery-Takeout">
        <div className="userInfo">
            {/* for customer info, use the newOrder variable with the specific info to display */}
            <p>{newOrder.customer_name}</p>
            <p>{newOrder.street_address}</p>
            <p>{newOrder.city} {newOrder.zip}</p>
        </div>
        <div className="delivery-takeout">
          <p className="forDelivery">{newOrder.type}</p>
        </div>  
      </div>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {/* map through the cart from the store to display each one of the items added */}
          {
            cart.map( pizza =>(<CheckoutItem className="itemBox" pizza={pizza} key={pizza.id}/>))
          }
        </tbody>
      </Table>

      {/* <------need to add total to the store, currently it's in header and it isn't being dispatched to the store (waiting to do newOrder.total) -----> */}
      <p className="total">Total:  </p>
      <div className="checkoutButton">
        {/* send newOrder to ConfirmModal via props */}
        <ConfirmModal newOrder={newOrder}/>
      </div>
    </div>
  )
}

export default Checkout;