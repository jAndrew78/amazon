// NODE PACKAGE IMPORTS
import React from 'react';
import FlipMove from 'react-flip-move';

// LOCAL IMPORTS
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './utils/context/StateProvider';

// IMAGES & STYLES
import OceanCard from './utils/images/banner-ads/ocean-card.jpg'
import '../styles/ShoppingCart.css';


function ShoppingCart() {
    const [{ cart, user }, dispatch] = useStateValue();

    // EMPTY CART DISPLAY
    if (cart?.length === 0) {
        return (
            <div className="shopping-cart">

                {/* LEFT SIDE */}
                <div className="shopping-cart-left">
                    
                    {/* BANNER AD */}
                    <img className="shopping-cart-ad" src={OceanCard} alt="banner ad" />
                    
                    <div>
                        {/* CART GREETING */}
                        <h3>
                            Hello {
                                // IF USER WITH DISPLAY NAME, DIPLAY (FORMATTED) NAME / IF NOT, USE OPTIONS ON FOLLOWING LINES
                                user?.displayName ? 
                                    user.displayName.charAt(0).toUpperCase() + 
                                    user.displayName.slice(1).toLowerCase() 
                                : user ? user?.email 
                                : "Guest"
                            }
                        </h3>

                        {/* CART TITLE */}
                        <h2 className="shopping-cart-title">Your Shopping Cart is Empty</h2>
                        
                        {/* CART IS EMPTY, SO DIV GETS HEIGHT: 200PX TO SPACE OUT THE FOOTER */}
                        <div className="shopping-cart-empty"></div>
                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="shopping-cart-right">
                    <Subtotal />
                </div>

            </div>
        )
    } else {

        // NON EMPTY CART DISPLAY
        return (
            <div className='shopping-cart'>

                {/* LEFT SIDE */}
                <div className="shopping-cart-left">

                    {/* BANNER AD */}
                    <img className="shopping-cart-ad" src={OceanCard} alt="banner ad"/>
                    
                    <div>
                        {/* CART GREETING */}
                        <h3>
                            Hello {
                                // IF USER WITH DISPLAY NAME, DIPLAY (FORMATTED) NAME / IF NOT, USE OPTIONS ON FOLLOWING LINES
                                user?.displayName ? 
                                    user.displayName.charAt(0).toUpperCase() +
                                    user.displayName.slice(1).toLowerCase() 
                                : user ? user?.email 
                                : "Guest"
                            }
                        </h3>

                        {/* CART TITLE */}
                        <h2 className="shopping-cart-title">Your Shopping Cart</h2>

                        {/* LIST OF CART ITEMS WITH FLIPMOVE ANNIMATION */}
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

                {/* RIGHT SIDE */}
                <div className="shopping-cart-right">
                    <Subtotal />
                </div>
            </div>
        )
    }
}


export default ShoppingCart;
