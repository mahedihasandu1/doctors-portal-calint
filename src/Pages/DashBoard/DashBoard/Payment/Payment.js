import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const Payment = () => {
    const stripePromise = loadStripe(process.env.REACT_APP_pkTest);
    const data = useLoaderData()
    const { treatMent, price, Date, slot } = data
    return (
        <div>
            <h2 className='text-3xl'>Payment For {treatMent}</h2>
            <p className='text=xl'>Please Pay {price} For your Appointment on{Date} at {slot}</p>
            <div className='w-96 shadow-xl  rounded bg-cyan-200 px-5 py-20 my-10'>
                <Elements stripe={stripePromise}>
                    <CheckOutForm 
                    data={data}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;