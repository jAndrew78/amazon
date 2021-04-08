// NODE PACKAGE IMPORTS
import React from 'react';
import { Link } from 'react-router-dom';

// LOCAL IMPORTS
import { useStateValue } from './utils/context/StateProvider.jsx'
import CheckoutProduct from './CheckoutProduct.jsx';

// STYLE IMPORTS
import '../styles/Checkout.css';


function Checkout() {

    const [{ cart, user }, dispatch] = useStateValue();

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
                    <div className="checkout-details">
                        {/* STRIPE MAGIC */}
                    </div>
                    
                </div>


            </div>
        </div>
    )
}


export default Checkout;
