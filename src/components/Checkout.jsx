import React from 'react';
import { useStateValue } from './utils/context/StateProvider';
import '../styles/Checkout.css';

function Checkout({ id, image, title, price, rating, hideButton }) {

    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

    return (
        <div className="checkout">
            <image className="checkout-image" src={image} />

            <div className="checkout-info">

                <p className="checkout-title">{title}</p>
                
                <p className="checkout-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>


                <div className="checkout-rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i} className="checkout-rating-stars">⭐</p>
                            ))}
                </div>

                {!hideButton && (
                    <button className="checkout-button" onClick={removeFromCart}>Remove From Cart</button>
                    )}

            </div>
        </div>
    )
}

export default Checkout;
