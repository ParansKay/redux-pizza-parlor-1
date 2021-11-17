import './Checkout.css'
import {useSelector} from 'react-redux'
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';



function Checkout() {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const checkoutItemData = useSelector(store => store.cart);
  const checkoutCustomer = useSelector(store => store.customerInfo);
 

  const handleCheckout = () => {
    console.log('click');
    const order = {
      customer_name: checkoutCustomer.name,
      street_address: checkoutCustomer.street_address,
      city: checkoutCustomer.city,
      zip: checkoutCustomer.zip,
      type: checkoutCustomer.type,
      pizzas: checkoutItemData
    }
    console.log(order);
    axios({
      method: 'POST',
      url: '/api/order', 
      data: order
    }).then(response =>  {
      console.log('added an order to the server', response);
    
    }).catch(error => {
      console.log('Unable to add order', error);
      alert('Unable to add order');
    })
    dispatch({type: 'RESET_CART'});
    dispatch({type: 'RESET_PRICE'});
    navigate('/checkout');
  }

  return (
    <>
      <div className="checkoutCustomer">
        <div className="checkoutCustomer">
      <h2>Step 3: Checkout</h2>
          <p>{checkoutCustomer.name}<br />
          {checkoutCustomer.address}<br />
          {checkoutCustomer.city + ', MN ' + checkoutCustomer.zip}</p>
        </div>
        <div className="checkoutType">
          <h2>{checkoutCustomer.type}</h2>
        </div>
        <div className="checkoutList">
          <table>
            <thead>
              <tr>
                <td>Pizza</td>
                <td>Cost</td>
              </tr>
            </thead>
            <tbody>
              {checkoutItemData.map( itemData =>
              <tr key={itemData.id}>
                <td>{itemData.name}</td>
                <td>{itemData.price}</td>
              </tr>
              )}
            </tbody>
          </table>
          <h3 className="total">

          </h3>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      </div> 
    </>
  );
}

export default Checkout;