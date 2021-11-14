import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import "../Checkout/Checkout.css"
import {Table}from 'react-bootstrap';
import {Button} from '@material-ui/core'
import axios from 'axios';
import CheckoutItem from '../CheckoutItem/CheckoutItem';


function Checkout() {
  
  // const reducerName = useSelector(store => store.reducerName);
  const dispatch = useDispatch();

  //****waiting to change pizzaListReducer to the new store item of pizzas that were added to the cart 
  const pizzaListReducer = useSelector(store => store.pizzaListReducer);

  //create a variable that stores an object for the entire order 
  //****waiting to get the reducer of customer information from store 
  const[ newOrder, setNewOrder ]=useState({
    customer_name: "Hannah", //waiting for store data
    street_address: "hiawatha ave",//waiting for store data
    city: "minneapolis",//waiting for store data
    zip: "55406",//waiting for store data
    type: "takeout",//waiting for store data
    total: 20,//waiting for store data
    pizzas: [{
      id: 2, //waiting for store data
      quantity: 3 //waiting for store data
    }] 
})

  //create an axios post req to send over the new order object
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
      <h2>Step 3: Checkout</h2>
      <div className="userInfo-Delivery-Takeout">
        <div className="userInfo">
          {/* ****waiting to get the reducer of customer information from store  */}
          <p>John Smith</p>
          <p>555 Applewood Lane</p>
          <p>Minneapolis, MN</p>
        </div>
        <div className="delivery-takeout">
          <p className="forDelivery">For Delivery/Takeout</p>
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
          {/* *** waiting to map through the new store item of pizzas that were added to the cart */}
          {
            pizzaListReducer.map( pizza =>(<CheckoutItem className="itemBox" pizza={pizza} key={pizza.id}/>))
          }
        </tbody>
      </Table>
      <p className="total">Total:</p>
      <div className="checkoutButton">
        <Button onClick={addOrder} className="primaryButton" variant="contained">Checkout</Button>
      </div>

    </div>
  )
}

export default Checkout;