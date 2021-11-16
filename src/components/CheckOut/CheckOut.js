import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import "../Checkout/Checkout.css"
import {Table}from 'react-bootstrap';
import {Button} from '@material-ui/core'
import axios from 'axios';
import CheckoutItem from '../CheckoutItem/CheckOutItem';
import { Link } from 'react-router-dom';



function Checkout() {

  //bring cart & customer info items from the store 
  const cart = useSelector(store => store.cart);
  const customerInfo = useSelector(store => store.customerInfo);


  //create a variable that stores an object for the entire order 
  const[ newOrder, setNewOrder ]=useState({
    customer_name: customerInfo.customer_name, 
    street_address: customerInfo.street_address,
    city: customerInfo.city,
    zip: customerInfo.zip,
    type: customerInfo.type,
    total: 20,
    pizzas: [{
      id: 3, 
      quantity: 3 
    }] 
})

  //create an axios post req to (/api/order) to send over the new order object to the server which will then send it to the db
  const addOrder = ()=>{
    console.log( 'in addItem' );
    axios.post( '/api/order', newOrder ).then ( (response)=>{
        console.log('back from POST:', response.data);
        alert('order added');
    }).catch( (err)=>{
        console.log(err);
        alert('nope');
    })
}


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
        <Button onClick={addOrder} className="primaryButton" variant="contained">Checkout</Button>
      </div>
    </div>
  )
}

export default Checkout;