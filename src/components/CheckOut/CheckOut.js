import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import "../Checkout/Checkout.css"
import {Table}from 'react-bootstrap';
import {Button} from '@material-ui/core'
import axios from 'axios';



function Checkout() {
  
  // const reducerName = useSelector(store => store.reducerName);
  const dispatch = useDispatch();

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
          <tr>
            {/* waiting for store data */}
            <td>Onamonapizza</td>
            {/* waiting for store data */}
            <td>$14.99</td>
          </tr>
          <tr>
            {/* waiting for store data */}
            <td>Pepperoni</td>
            {/* waiting for store data */}
            <td>$13.99</td>
          </tr>
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