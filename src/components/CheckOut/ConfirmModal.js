import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../Checkout/ConfirmModal.css'
import axios from 'axios';


//Bootstrap modal
function ConfirmModal(props) {
  //bootstrap controls that trigger whether the modal is showing or not 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //create an axios post req to (/api/order) to send over the new order object to the server which will then send it to the db
  const addOrder = () => {
    console.log('in addItem');
    axios.post('/api/order', props.newOrder).then((response) => {
      console.log('back from POST:', response.data);
      //on a successful post req run the handleShow function to show the modal (this happens when the user clicks the SUBMIT ORDER button) 
      handleShow();
    }).catch((err) => {
      console.log(err);
      alert('nope');
    })
  }

  return (
    //Bootstrap modal 
    <>
      {/* onClick of the submit order button, run addOrder to add it to the db */}
      <Button variant="danger" onClick={addOrder}>
        SUBMIT ORDER
        </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Order submitted successfully!</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" >
            {/* on click of the OK button in the modal, redirect user back to the PizzaList page */}
            <Link className="submissionConfirmation" to="/">OK</Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmModal;