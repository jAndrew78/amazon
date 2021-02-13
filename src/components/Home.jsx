import React from 'react';
import '../styles/Home.css';

// COMPONENTS
import Product from './Product';

// IMAGES
import Prime from './utils/images/hero/prime-video.jpg';
import Audible from './utils/images/hero/audible.jpg';
import Certified from './utils/images/hero/certified-refurbished.jpg';
// import Alexa from './utils/images/hero/alexa-laptop.jpg';


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
                    <Product title="Apple AirPods" />
                    <Product title="Apple AirPods" />
                    <Product title="Apple AirPods" />
                </div>

                <div className="home-row">
                    <Product />
                    <Product />
                </div>

                {/* BOTTOM MARGIN FIX ONLY */}
                <div className="home-row-bottom"></div>

            </div>
        </div>
    )
}


export default Home;
