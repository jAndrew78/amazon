import React from 'react';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './utils/context/StateProvider';
import '../styles/Checkout.css';

import OceanCard from './utils/images/banner-ads/ocean-card.jpg'


function Checkout() {
    const [{ cart, user }, dispatch] = useStateValue();

    if (cart?.length === 0) {
        return (
            <div className="checkout">
                <div className="checkout-left">
                    <img className="checkout-ad" src={OceanCard} alt="banner ad" />
                    <div>
                        <h3>
                            Hello {
                                user?.displayName ? user.displayName.charAt(0).toUpperCase() +user.displayName.slice(1).toLowerCase() 
                                : user ? user?.email 
                                : "Guest"
                            }
                        </h3>
                        <h2 className="checkout-title">Your Shopping Cart is Empty</h2>
                        <div className="checkout-empty"></div>
                    </div>
                </div>

                <div className="checkout-right">
                    <Subtotal />
                </div>
            </div>
        )
    } else {
        return (
            <div className='checkout'>
                <div className="checkout-left">

                    <img className="checkout-ad" src={OceanCard} alt="banner ad"/>
                    
                    <div>
                        <h3>
                            Hello {
                                user?.displayName ? user.displayName.charAt(0).toUpperCase() +user.displayName.slice(1).toLowerCase() 
                                : user ? user?.email 
                                : "Guest"
                            }
                        </h3>
                        <h2 className="checkout-title">Your Shopping Cart</h2>

                        {cart.map(item => (
                            <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                            ))}
                    </div>
                    
                </div>

                <div className="checkout-right">
                    <Subtotal />
                </div>
            </div>
        )
    }

    
}


export default Checkout;
