import React from 'react';
import '../styles/Home.css';

// COMPONENTS
import Product from './Product';

// IMAGES
import Prime from './utils/images/hero/prime-video.jpg';
import Audible from './utils/images/hero/audible.jpg';
import Certified from './utils/images/hero/certified-refurbished.jpg';
// import Alexa from './utils/images/hero/alexa-laptop.jpg';

import AirPods from './utils/images/products/airpods.png';
// import Fitbit from './utils/images/products/fitbit-versa-3.jpg';



function Home() {
    return (
        <div className="home">

            <div className="home-container">

                {/* HERO CAROUSEL */}
                <div className="carousel-container">

                    <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            
                            <div className="carousel-item active" data-bs-interval="6000">
                                <img className="d-block w-100" src={Prime} alt="1st Slide" />
                            </div>

                            <div className="carousel-item" data-bs-interval="6000">
                                <img className="d-block w-100" src={Certified} alt="2nd Slide" />
                            </div>

                            <div className="carousel-item" data-bs-interval="6000">
                                <img className="d-block w-100" src={Audible} alt="3rd Slide" />
                            </div>

                            {/* <div className="carousel-item" data-bs-interval="6000">
                                <img className="d-block w-100" src={Alexa} alt="4th Slide" />
                            </div> */}
                            
                        </div>

                        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>

                        <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>

                    </div>
                </div>

                {/* PRODUCT ROWS */}
                <div className="home-row">
                    
                    <Product 
                        id="12341234"
                        title="Apple AirPods"
                        price={119.99}
                        rating={5}
                        image={AirPods} 
                    />

                    <Product 
                        id="12341234"
                        title="Apple AirPods"
                        price={119.99}
                        rating={5}
                        image={AirPods} 
                    />

                    <Product 
                        id="12341234"
                        title="Apple AirPods"
                        price={119.99}
                        rating={5}
                        image={AirPods} 
                    />
                    
                </div>

                <div className="home-row">
                    
                    <Product
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                    />

                    <Product
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.94}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />

                </div>

                <div className="home-row">
                    
                    <Product
                        id="4903850"
                        title="Fitbit Charge 3 Fitness Activity Tracker"
                        price={171.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />

                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />

                </div>

                <div className="home-row">
                    
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />

                </div>

                {/* BOTTOM MARGIN FIX ONLY */}
                <div className="home-row-bottom"></div>

            </div>
        </div>
    )
}


export default Home;
