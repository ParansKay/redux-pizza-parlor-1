import {useDispatch, useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import {Table}from 'react-bootstrap';
import axios from 'axios';
import Order from '../Order/Order';



function Admin(props) {

useEffect(() =>{
    getAdmin();
  }, [] );

  const [adminOrders, setAdminOrders]= useState([]);

const getAdmin = ()=>{
  axios.get('/api/order').then((res) => { 
    console.log('Successful AXIOS GET', res.data);
    setAdminOrders(res.data);
    console.log(adminOrders)
  }).catch((err) => {
    console.log('Error in AXIOS GET');
  })
}
  

const buttonTest = ()=>{
  console.log(adminOrders)
}
  // const reducerName = useSelector(store => store.reducerName);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Admin</h1>
      <Table striped bordered hover>
      <thead>
          <tr>
            <th>Name</th>
            <th>Total</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {adminOrders.map( order =>(<Order order={order} key={order.id}/>))}
            </tr>
            </tbody>
      </Table>
      </div>
  )
}

export default Admin;