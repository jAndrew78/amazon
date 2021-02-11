import React from 'react';
import '../styles/Home.css';

// COMPONENTS
import Product from './Product';

// IMAGES
import Prime from './utils/images/hero/prime-video.jpg';


function Home() {
    return (
        <div className="home">

            <div className="home-container">
                <img
                    className="home-image" alt="home hero img"
                    // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    src={Prime}
                />






                {/* <div className="col-12">
                    <div id="carouselExampleFade" className="carousel slide header-slides carousel-fade" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={Slide1} className="d-block w-100 header-slides" alt="Studio Ghibli GIF"></img>
                            </div>
                            <div className="carousel-item">
                                <img src={Slide2} className="d-block w-100 header-slides" alt="Studio Ghibli GIF"></img>
                            </div>
                            <div className="carousel-item">
                                <img src={Slide3} className="d-block w-100 header-slides" alt="Studio Ghibli GIF"></img>
                            </div>
                        </div>
                    </div>
                </div> */}
                
                <div className="home-row">
                    <Product />
                    <Product />
                    <Product />
                </div>

                <div className="home-row">
                    <Product />
                    <Product />
                </div>

                <div className="home-row-bottom"></div>

            </div>
        </div>

        
    )
}


export default Home;
