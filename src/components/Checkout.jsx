// 3RD PARTY IMPORTS
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'

// LOCAL IMPORTS
import { useStateValue } from './utils/context/StateProvider'
import CheckoutProduct from './CheckoutProduct';
import { getCartTotal } from './utils/context/reducer';
import axios from './utils/axios/Axios';

// STYLES
import '../styles/Checkout.css';


function Checkout() {

    const [{ cart, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState('');
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        
        // GENERATE STRIPE SECRET BEFORE WE CHARGE THEIR CARD
        const getClientSecret = async () => {
            try {
                const response = await axios({
                    method: 'post',
                    // x100 BELOW - STRIPE EXPECTS PAYMENT TOTAL IN A SUBUNIT OF THE CURRENCY (CENTS IF USING $)
                    url: `/payments/create?total=${getCartTotal(cart) * 100}`
                })
                setClientSecret(response.data.clientSecret)
            } catch(err) {
                console.log(err)
            } 
        }

        getClientSecret();
    }, [cart])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        try {
            const payload = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                }
            }).then(({ paymentIntent }) => {    // paymentIntent is basically what Stripe calls payment confirmation
                setSucceeded(true);
                setError(null);
                setProcessing(false);
                
                // REPLACE PAYMENT PAGE WITH ORDERS PAGE IN HISTORY SO THE BACK BUTTON DOESN'T TAKE THEM BACK TO THE PAYMENT PAGE
                history.replace('/orders')
            })
        } catch(err) {
            console.log(err)
        }
    }

    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '');
    }

    return (
        <div className='checkout'>

            {/* CHECKOUT SECTIONS CONTAINER */}
            <div className="checkout-container">

                {/* CHECKOUT SECTION TITLE */}
                <h1>
                    Checkout (
                        <Link to='/shopping-cart'>{cart?.length} items</Link>
                    )
                </h1>

                {/* DELIVERY ADDRESS */}
                <div className="checkout-section">
                    <div className="checkout-title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="checkout-address">
                        {/* REPLACE DISPLAYNAME WITH FIRST / LAST OR SHIPPING ADDRESS NAME, ETC*/}
                        <p>
                            {
                                user?.displayName ?
                                    user?.displayName.charAt(0).toUpperCase() + 
                                    user?.displayName.slice(1).toLowerCase() :
                                'Guest'
                            } LastName
                        </p>
                        {/* REPLACE WITH SHIPPING ADDRESS OPTIONS */}
                        <p>123 My Street</p> 
                        <p>City, State 12344</p>
                    </div>
                </div>

                {/* ITEM REVIEW */}
                <div className="checkout-section">
                    <div className="checkout-title">
                        <h3>Review Items</h3>
                    </div>
                    <div className="checkout-items">
                        {cart.map((item, i) => (
                            <CheckoutProduct
                                key={`key-${i}`} 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* PAYMENT METHOD */}
                <div className="checkout-section">
                    <div className="checkout-title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="checkout-payment">
                        {/* STRIPE MAGIC */}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className="checkout-price-container">
                                
                                <CurrencyFormat 
                                    renderText={value => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getCartTotal(cart)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />

                                <button disabled={processing || disabled || succeeded }>
                                    <span>
                                        {processing ? <p>Processing</p> : 'Buy Now'}
                                    </span>
                                </button>

                            </div>
                            
                            {/* PAYMENT INFO ERROR */}
                            {error && <div>{error}</div>}

                        </form>
                    </div>
                    
                </div>


            </div>
        </div>
    )
}


export default Checkout;
