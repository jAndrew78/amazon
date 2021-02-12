import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Home.css';

// COMPONENTS
import Product from './Product';

// IMAGES
import Prime from './utils/images/hero/prime-video.jpg';
import Audible from './utils/images/hero/audible.jpg';
// import Alexa from './utils/images/hero/alexa-laptop.jpg';
import Certified from './utils/images/hero/certified-refurbished.jpg';


function Home() {    
    return (
        <div className="home">

            <div className="home-container">
                {/* <img
                    className="home-image" alt="home hero img"
                    // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    src={Prime}
                /> */}

                {/* HERO CAROUSEL */}
                <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        
                        <div className="carousel-item active" data-bs-interval="6000">
                            <img className="d-block w-100" src={Prime} alt="First slide" />
                        </div>

                        <div className="carousel-item" data-bs-interval="6000">
                            <img className="d-block w-100" src={Audible} alt="Second slide" />
                        </div>

                        {/* <div className="carousel-item" data-bs-interval="6000">
                            <img className="d-block w-100" src={Alexa} alt="Third slide" />
                        </div> */}
                        
                        <div className="carousel-item" data-bs-interval="6000">
                            <img className="d-block w-100" src={Certified} alt="Third slide" />
                        </div>

                    </div>

                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>

                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>

                </div>

                {/* PRODUCT ROWS */}
                <div className="home-row">
                    <Product />
                    <Product />
                    <Product />
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
