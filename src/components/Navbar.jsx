import React from 'react';
import '../styles/Navbar.css';

// IMAGES
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from './utils/images/misc/cart.png';


function Navbar() {
    return (
        <div className='navbar'>
        
            <img className="navbar-logo"
                 src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />

            <div className="navbar-search">
                <input className="navbar-search-input" type="text"/>
                <SearchIcon className="navbar-search-icon" style={{ fontSize: 36 }} />  
            </div>

            <div className="navbar-links">

                <div className="navbar-links-section">
                    <span className="navbar-links-line-1">Hello Guest</span>
                    <span className="navbar-links-line-2">Sign In</span>
                </div>

                <div className="navbar-links-section">
                    <span className="navbar-links-line-1">Returns</span>
                    <span className="navbar-links-line-2">& Orders</span>
                </div>

                <div className="navbar-links-section">
                    <span className="navbar-links-line-1">Your</span>
                    <span className="navbar-links-line-2">Prime</span>
                </div>
                
                <div className="navbar-cart">
                    <img className="navbar-cart-icon" src={ShoppingCartIcon} alt="Shopping Cart" />
                    <span className="navbar-links-line-2 navbar-cart-text">Cart</span>
                    <span className="navbar-cart-count">0</span>
                </div>

            </div>
        </div>
    )
}


export default Navbar;
