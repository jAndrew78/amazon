import React from 'react';
import FlipMove from 'react-flip-move';

import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './utils/context/StateProvider';

import OceanCard from './utils/images/banner-ads/ocean-card.jpg'

import '../styles/ShoppingCart.css';



function ShoppingCart() {
    const [{ cart, user }, dispatch] = useStateValue();

    
    if (cart?.length === 0) {
        return (
            <div className="shopping-cart">
                <div className="shopping-cart-left">
                    <img className="shopping-cart-ad" src={OceanCard} alt="banner ad" />
                    <div>
                        <h3>
                            Hello {
                                user?.displayName ? user.displayName.charAt(0).toUpperCase() + user.displayName.slice(1).toLowerCase() 
                                : user ? user?.email 
                                : "Guest"
                            }
                        </h3>
                        <h2 className="shopping-cart-title">Your Shopping Cart is Empty</h2>
                        <div className="shopping-cart-empty"></div>
                    </div>
                </div>

                <div className="shopping-cart-right">
                    <Subtotal />
                </div>
            </div>
        )
    } else {
        return (
            <div className='shopping-cart'>
                <div className="shopping-cart-left">

                    <img className="shopping-cart-ad" src={OceanCard} alt="banner ad"/>
                    
                    <div>
                        <h3>
                            Hello {
                                user?.displayName ? user.displayName.charAt(0).toUpperCase() +user.displayName.slice(1).toLowerCase() 
                                : user ? user?.email 
                                : "Guest"
                            }
                        </h3>
                        <h2 className="shopping-cart-title">Your Shopping Cart</h2>

                        <FlipMove>
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
                        </FlipMove>
                    </div>
                    
                </div>

                <div className="shopping-cart-right">
                    <Subtotal />
                </div>
            </div>
        )
    }

    
}


export default ShoppingCart;
