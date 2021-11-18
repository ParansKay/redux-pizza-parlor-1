import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CustomerInfo() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [type, setType] = useState('');

    const totalPrice = useSelector(store => store.totalPrice);

    const isEnabled = name.length > 0 && address.length > 0 && city.length > 0 && zip.length > 0 && type.length > 0;


    const handleSubmit = event => {
        event.preventDefault();

        console.log('adding CUSTOMER info for:', { name });

        dispatch({
            type: 'ADD_CUSTOMER', payload: {
                customer_name: name,
                street_address: address,
                city: city,
                zip: zip,
                type: type,
            }
        })
        setName('');
        setAddress('');
        setCity('');
        setZip('');
        setType('');
        navigate('/checkout');

    }

    return (
        <div className="customerInformation">


            <h2>Step 2: Customer Information</h2>
            <form onSubmit={handleSubmit} className="add-CustomerInfo-form">< input placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
                <br />
                <input placeholder="Street Address" value={address} onChange={(event) => setAddress(event.target.value)} />
                <br />
                <input placeholder="City" value={city} onChange={(event) => setCity(event.target.value)} />
                <br />
                <input placeholder="Zip" value={zip} onChange={(event) => setZip(event.target.value)} />
                <br />
                <input onChange={(event) => setType(event.target.value)} type="radio" id="pickup" name="type" value="pickup" /> Pickup
    <br />
                <input onChange={(event) => setType(event.target.value)} type="radio" id="delivery" name="type" value="delivery" /> Delivery
    <br />
                <h3>Total: ${totalPrice}</h3> <button disabled={!isEnabled}>NEXT</button>

            </form>

        </div>
    )
}

export default CustomerInfo;