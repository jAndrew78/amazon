import React from 'react';
import { useStateValue } from './utils/context/StateProvider';
import '../styles/Product.css';

// IMAGES
// import AirPods from './utils/images/products/airpods.png';


function Product({ id, title, price, rating, image }) {
    const [{ cart }, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image,
            },
        })
    }


    return (
        <div className='product'>

            <div className="product-info">
                
                <p className="product-title">{title}</p>

                {/* STARS MAP */}
                <div className="product-rating">
                    
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p key={i} className="product-rating-stars">⭐</p>
                    ))}
                </div>

                {/* PRODUCT PRICE */}
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>

            {/* PRODUCT IMAGE */}
            <img src={image} alt="product img" />

            {/* ADD TO CART BUTTON */}
            <button onClick={addToCart}>Add to Cart</button>

        </div>
    )
}


export default Product;
