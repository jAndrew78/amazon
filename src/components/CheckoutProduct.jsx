import React, { forwardRef } from 'react';
import { useStateValue } from './utils/context/StateProvider';
import '../styles/CheckoutProduct.css';

const CheckoutProduct = forwardRef(({ id, image, title, price, rating, hideButton }, ref) => {

    const [{ cart }, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

    return (
        <div ref={ref} className="checkout-product">
            <img className="checkout-product-image" src={image} alt="product" />

            <div className="checkout-product-info">

                <p className="checkout-product-title">{title}</p>
                
                <p className="checkout-product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>


                <div className="checkout-product-rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i} className="checkout-product-rating-stars">⭐</p>
                            ))}
                </div>

                {!hideButton && (
                    <button className="checkout-product-button" onClick={removeFromCart}>Remove From Cart</button>
                    )}

            </div>
        </div>
    )
})

export default CheckoutProduct;
