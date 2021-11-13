import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import "../Checkout/Checkout.css"
import {Button, Table, }from 'react-bootstrap';



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
          <Button variant="primary">blabla</Button>
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
            <td>Onamonapizza</td>
            <td>$14.99</td>
          </tr>
          <tr>
            <td>Pepperoni</td>
            <td>$13.99</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Checkout;