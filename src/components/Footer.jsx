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
                    <div className="footer-1-link">Careers</div>
                    <div className="footer-1-link">Blog</div>
                    <div className="footer-1-link">About nozamA</div>
                    <div className="footer-1-link">Sustainability</div>
                    <div className="footer-1-link">Press Center</div>
                    <div className="footer-1-link">Investor Relations</div>
                    <div className="footer-1-link">Amazon Devices</div>
                    <div className="footer-1-link">Amazon Tours</div>
                </div>

                <div className="footer-1-row">
                    <div className="footer-1-header">Make Money with Us</div>
                    <div className="footer-1-link">Sell products on nozamA</div>
                    <div className="footer-1-link">Sell apps on nozamA</div>
                    <div className="footer-1-link">Become an Affiliate</div>
                    <div className="footer-1-link">Advertise Your Products</div>
                    <div className="footer-1-link">Self-Publish with Us</div>
                    <div className="footer-1-link">Host a nozamA Hub</div>
                    <div className="footer-1-link">Something Else to Make it all Even</div>
                    <div className="footer-1-link">&#8250; See More Make Money with Us</div>
                </div>

                <div className="footer-1-row">
                    <div className="footer-1-header">nozamA Payment Products</div>
                    <div className="footer-1-link">nozamA Rewards Visa Signature Cards</div>
                    <div className="footer-1-link">moc.nozamA Store Card</div>
                    <div className="footer-1-link">nozamA Business Card</div>
                    <div className="footer-1-link">nozamA Business Line of Credit</div>
                    <div className="footer-1-link">Shop with Points</div>
                    <div className="footer-1-link">Credit Card Marketplace</div>
                    <div className="footer-1-link">Reload Your Balance</div>
                    <div className="footer-1-link">nozamA Currency Calculator</div>
                </div>

                <div className="footer-1-row">
                    <div className="footer-1-header">Let Us Help You</div>
                    <div className="footer-1-link">Your Account</div>
                    <div className="footer-1-link">Your Orders</div>
                    <div className="footer-1-link">Shipping Rates & Policies</div>
                    <div className="footer-1-link">nozamA Prime</div>
                    <div className="footer-1-link">Returns & Replacements</div>
                    <div className="footer-1-link">Manage Your Content & Devices</div>
                    <div className="footer-1-link">nozamA Assistant</div>
                    <div className="footer-1-link">Help</div>
                </div>
            </div>

            <div className='footer-2'>
                <Link to="/">
                    <img className="footer-2-logo" alt="amazon logo"
                        src={FooterLogo} />
                </Link>

                <div className="footer-2-language-selection">
                    <span className="footer-2-globe">&#127760;</span>
                    English
                </div>

                <div className="footer-2-country-selection">
                    <img src={FlagUSA} className="footer-2-flag" alt="Flag USA" />
                    United States
                </div>
            </div>

            <div className='footer-3'></div>

        </div>
        
    )
}


export default Footer;
