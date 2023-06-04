import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import useCart from '../../../hooks/useCart';

// Todo : provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const Payment = () => {

    const [cart] = useCart();

    const total = cart.reduce((sum, item)=> sum + item.price, 0);

    const price = parseFloat(total.toFixed(2))

    return (
        <div>
            <SectionTitle
             subHeading={"Please Process The Provide"}
             heading={"Payment"}
            ></SectionTitle>
            <h2>Taka o taka</h2>
            <Elements stripe={stripePromise}>
                <CheckOutForm cart={cart} price={price}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;