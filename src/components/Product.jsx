import React from 'react';
import '../styles/Product.css';

// IMAGES
import AirPods from './utils/images/products/airpods.png';


function Product() {
    return (
        <div className='product'>

            <div className="product-info">
                
                <p>Product Title</p>
                
                <p className="product-price">
                    <small>$</small>
                    <strong>29.99</strong>
                </p>

                <div className="product-rating">
                    <p className="product-rating-stars">⭐</p>
                    <p className="product-rating-stars">⭐</p>
                    <p className="product-rating-stars">⭐</p>
                    <p className="product-rating-stars">⭐</p>
                    <p className="product-rating-stars">⭐</p>
                    {/* <p className="product-rating-stars">&#9734;</p> */}
                    {/* <p className="product-rating-stars">&#9734;</p> */}
                    
                    {/* {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p></p>
                    ))} */}
                </div>
            </div>

            <img src={AirPods} alt="product img" />

            <button>Add to Cart</button>

        </div>
    )
}


export default Product;
