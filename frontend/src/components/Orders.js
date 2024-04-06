import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import '../Ui/Orders.css'

function OrderPage() {
    const [address, setAddress] = useState([]);
    const { id, quantity } = useParams(); 
    const [activeStep, setActiveStep] = useState(0);
    console.log(id)
    const [name, setName] = useState('');
    const [contactNumber, setNumber] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipcode] = useState('');
    const [landmark, setLandmark] = useState('');
    const [state, setState] = useState('');
    const [street, setstreet] = useState('');
    const [error, setError] = useState('');

    function handleNext() {
        setActiveStep((currentStep) => currentStep + 1);
    }

    function handleBack() {
        setActiveStep((currentStep) => currentStep - 1);
    }

    const fetchAddress = async () => {
        try {
           
           const token=sessionStorage.getItem("token");
            
            const response = await axios.get('https://amazonclone-tz74.onrender.com/api/v1/addresses', {
                headers: {
                    'Authorization': `${token}`
                }
            });
            if (response.status === 200) {
                setAddress(response.data);
            }
        } catch (error) {
            console.error('Error fetching address:', error);
        }
    };

    useEffect(() => {
        fetchAddress();
    }, []);

    const addAddress = async () => {
     
        try {
            const token = sessionStorage.getItem('token');
            const response = await axios.post('https://amazonclone-tz74.onrender.com/api/v1/addresses', {
                name,
                contactNumber,
                city,
                zipCode,
                landmark,
                state,
                street
            }, {
                headers: {
                    'Authorization': `${token}`
                }
            });
            console.log('Address added:', response.data);
            setAddress([response.data]); 
         
        } catch (error) {
            console.error('Error adding address:', error.response);
            setError('Failed to add address');
        }
    }

    async function handlePlaceOrder() {
        try {
            const token = sessionStorage.getItem('token');
            const selectedAddress = address[0]; 
            const response = await axios.post('https://amazonclone-tz74.onrender.com/api/v1/orders', {
                product: id,
                quantity: quantity,
                address: selectedAddress._id 
            }, {
                headers: {
                    'Authorization': `${token}`
                }
            });
            console.log('Order created:', response.data);
           
        } catch (error) {
            console.error('Error placing order:', error);
        }
    }

    return (
        <div>
            <Stepper activeStep={activeStep}>
                <Step>
               { address.length === 0 ? <StepLabel>Address</StepLabel> : <StepLabel>Confirmation Address</StepLabel>}
                </Step>
                <Step>                                                                                  
                    <StepLabel>Place order</StepLabel>
                    
                </Step>
                <Step>
                    <StepLabel>Order Confirmation</StepLabel>
                </Step>
            </Stepper>
            <div>

            {activeStep > 0 && (
                    <Button onClick={handleBack}>Back</Button>
                )}
                {activeStep < 2 && (
                    <Button onClick={handleNext}>Next</Button>
                )}
                <div className="display2">
            {activeStep === 0 && (
  
  
            address.length === 0 ? (
                        <form onSubmit={(e)=>{e.preventDefault();addAddress();}}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                            <label htmlFor="number">Number</label>
                            <input type="text" id="number" value={contactNumber} onChange={(e) => setNumber(e.target.value)} />
                            <label htmlFor="city">City</label>
                            <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
                            <label htmlFor="zipcode">Zipcode</label>
                            <input type="text" id="zipcode" value={zipCode} onChange={(e) => setZipcode(e.target.value)} />
                            <label htmlFor="landmark">Landmark</label>
                            <input type="text" id="landmark" value={landmark} onChange={(e) => setLandmark(e.target.value)} />
                            <label htmlFor="state">State</label>
                            <input type="text" id="state" value={state} onChange={(e) => setState(e.target.value)} />    
                            <label htmlFor="street">street</label>
                            <input type="text" id="street" value={street} onChange={(e) => setstreet(e.target.value)} />   
                            <button type="submit">Add Address</button>
                        
                          
                        </form>
                    ):(
                      
                  <div className="address">
                        <h1>Your address</h1>
                        <p>
                         <p>Name: {address[0].name}</p>
        <p>Contact Number: {address[0].contactNumber}</p>
        <p>City: {address[0].city}</p>
        <p>Zipcode: {address[0].zipCode}</p>
        <p>Landmark: {address[0].landmark}</p>
        <p>State: {address[0].state}</p>
        <p>Street: {address[0].street}</p>

                        </p>
                        </div>
                    )
                    
                    
            )
                                }    
                                
                                </div>
                                
                {activeStep === 1 && address.length > 0 && (
                    <Button onClick={handlePlaceOrder}>Place Order</Button>
                )}
            
            
            </div>
            {error && <div>Error: {error}</div>}
        </div>
    );
}

export default OrderPage;
