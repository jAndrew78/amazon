import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

import FooterLogo from './utils/images/logos/navbar-logo.png';
import FlagUSA from './utils/images/misc/flag-usa.png';


const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

function Footer() {
    return (
        <div className="footer">

            <div className='footer-link-to-top' onClick={scrollToTop}>Back to top</div>

            <div className='footer-1'>
                <div className="footer-1-row">
                    <div className="footer-1-header">Get to Know Us</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">Careers</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">Blog</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">About nozamA</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">Sustainability</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">Press Center</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">Investor Relations</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">nozamA Devices</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">nozamA Tours</div>
                </div>

                <div className="footer-1-row">
                    <div className="footer-1-header">Make Money with Us</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">Sell products on nozamA</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">Sell apps on nozamA</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">Become an Affiliate</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">Advertise Your Products</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">Self-Publish with Us</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">Host a nozamA Hub</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">Something Else to Make it all Even</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">&#8250; See More Make Money with Us</div>
                </div>

                <div className="footer-1-row">
                    <div className="footer-1-header">nozamA Payment Products</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">nozamA Rewards Visa Signature Cards</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">moc.nozamA Store Card</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">nozamA Business Card</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">nozamA Business Line of Credit</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">Shop with Points</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">Credit Card Marketplace</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">Reload Your Balance</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">nozamA Currency Calculator</div>
                </div>

                <div className="footer-1-row">
                    <div className="footer-1-header">Let Us Help You</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">Your Account</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">Your Orders</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">Shipping Rates & Policies</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">nozamA Prime</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">Returns & Replacements</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">Manage Your Content & Devices</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">nozamA Assistant</div>
                    <div className="footer-1-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">Help</div>
                </div>
            </div>

            <div className='footer-2'>
                <Link to="/">
                    <img className="footer-2-logo" alt="amazon logo"
                        src={FooterLogo} />
                </Link>

                <div className="footer-2-language-selection" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                    <span className="footer-2-globe">&#127760;</span>
                    English
                    <span className="footer-2-arrow">&#9660;</span>
                </div>

                <div className="footer-2-country-selection" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                    <img src={FlagUSA} className="footer-2-flag" alt="Flag USA" />
                    United States
                </div>
            </div>

            <div className='footer-3'>

                <div className="row">
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            nozamA Music
                        </div>
                        <div className="footer-3-content">
                            Stream millions of songs
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            nozamA Advertising
                        </div>
                        <div className="footer-3-content">
                            Find, attract, and engage customers
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            nozamA Drive
                        </div>
                        <div className="footer-3-content">
                            Cloud storage from nozamA
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            6pm
                        </div>
                        <div className="footer-3-content">
                            Score deals on fashion brands
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            AbeBooks
                        </div>
                        <div className="footer-3-content">
                            Books, art & collectibles
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            ACX
                        </div>
                        <div className="footer-3-content">
                            Audiobook Publishing Made Easy
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            Alexa
                        </div>
                        <div className="footer-3-content">
                            Actionable Analytics for the Web
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            Sell on nozamA
                        </div>
                        <div className="footer-3-content">
                            Start a Selling Account
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            nozamA Business
                        </div>
                        <div className="footer-3-content">
                            Everything For Your Business
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            nozamA Fresh
                        </div>
                        <div className="footer-3-content">
                            Groceries & More Right To Your Door
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            nozamAGlobal
                        </div>
                        <div className="footer-3-content">
                            Ship Orders Internationally
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            Home Services
                        </div>
                        <div className="footer-3-content">
                            Experienced Pros Happiness Guarantee
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            nozamA Ignite
                        </div>
                        <div className="footer-3-content">
                            Sell your original Digital Educational Resources
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            nozamA Web Services
                        </div>
                        <div className="footer-3-content">
                            Scalable Cloud Computing Services
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            Audible
                        </div>
                        <div className="footer-3-content">
                            Listen to Books & Original Audio Performances
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            Book Depository
                        </div>
                        <div className="footer-3-content">
                            Books With Free Delivery Worldwide
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            Box Office Mojo
                        </div>
                        <div className="footer-3-content">
                            Find Movie Box Office Data
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            ComiXology
                        </div>
                        <div className="footer-3-content">
                            Thousands of Digital Comics
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            DPReview
                        </div>
                        <div className="footer-3-content">
                            Digital Photography
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            East Dane
                        </div>
                        <div className="footer-3-content">
                            Designer Men's Fashion
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            Fabric
                        </div>
                        <div className="footer-3-content">
                            Sewing, Quilting & Knitting
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            Goodreads
                        </div>
                        <div className="footer-3-content">
                            Book reviews & recommendations
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            IMDb
                        </div>
                        <div className="footer-3-content">
                            Movies, TV & Celebrities
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            IMDbPro
                        </div>
                        <div className="footer-3-content">
                            Get Info Entertainment Professionals Need
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            Kindle Direct Publishing
                        </div>
                        <div className="footer-3-content">
                            Indie Digital & Print Publishing Made Easy
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            nozamA Photos
                        </div>
                        <div className="footer-3-content">
                            Unlimited Photo Storage Free With Prime
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            Prime Video Direct 
                        </div>
                        <div className="footer-3-content">
                            Video Distribution Made Easy
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            Shopbop
                        </div>
                        <div className="footer-3-content">
                            Designer Fashion Brands
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            nozamA Warehouse
                        </div>
                        <div className="footer-3-content">
                            Great Deals on Quality Used Products
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            Whole Foods Market
                        </div>
                        <div className="footer-3-content">
                            America’s Healthiest Grocery Store
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            Woot!
                        </div>
                        <div className="footer-3-content">
                            Deals and Shenanigans
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            Zappos
                        </div>
                        <div className="footer-3-content">
                            Shoes & Clothing
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            Ring
                        </div>
                        <div className="footer-3-content">
                            Smart Home Security Systems
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            eero WiFi
                        </div>
                        <div className="footer-3-content">
                            Stream 4K Video in Every Room
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            Neighbors App
                        </div>
                        <div className="footer-3-content">
                            Real-Time Crime & Safety Alerts
                        </div>
                    </div>
                    <div className="col-2 footer-3-link" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        <div className="footer-3-heading">
                            nozamA Subscription Boxes
                        </div>
                        <div className="footer-3-content">
                            Top subscription boxes – right to your door
                        </div>
                    </div>
                </div>
 	
                <div className="row flex justify-content-center small font-weight-bold no-gutters mt-4">
                    <div className="footer-3-conditions ml-3 mr-3" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        Conditions of Use
                    </div>
                    <div className="footer-3-conditions ml-3 mr-3" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        Privacy Notice
                    </div>
                    <div className="footer-3-conditions ml-3 mr-3" data-bs-toggle="modal" data-bs-target="#conditionsModal">
                        Interest-Based Ads
                    </div>
                </div>

                <div className="footer-copyright row flex justify-content-center small font-weight-bold mt-1">
                    &copy; 2077-2077, nozamA, Inc. or it's affiliates
                </div>
            </div>


            <div className="modal fade" id="conditionsModal" tabindex="-1" aria-labelledby="conditionsModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="conditionsModalLabel">This isn't a real website</h5>
                        </div>
                        <div className="modal-body text-center mt-3">
                            It's just a demo site I made for fun<br />
                            Not affiliated with Amazon in any way
                            <p>Also not affiliated with nozamA... whoever they are</p>
                            <p>Enjoy!</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn conditions-modal-button" data-bs-dismiss="modal">Got It</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    )
}


export default Footer;
