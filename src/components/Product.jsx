import React from 'react';
import '../styles/Product.css';

// IMAGES
import AirPods from './utils/images/products/airpods.png';


function Product({ id, title, price, rating, image }) {
    return (
        <div className='product'>

            <div className="product-info">
                
                <p className="product-title">{title}</p>

                <div className="product-rating">
                    {/* <p className="product-rating-stars">⭐</p>
                    <p className="product-rating-stars">⭐</p>
                    <p className="product-rating-stars">⭐</p>
                    <p className="product-rating-stars">⭐</p>
                    <p className="product-rating-stars">⭐</p> */}
                    {/* <p className="product-rating-stars">&#9734;</p> */}
                    {/* <p className="product-rating-stars">&#9734;</p> */}
                    
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p className="product-rating-stars">⭐</p>
                    ))}
                </div>

                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>

            <img src={image} alt="product img" />

            <button>Add to Cart</button>

        </div>
    )
}


export default Product;
