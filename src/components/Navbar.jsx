// 3RD PARTY IMPORTS
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase';

// LOCAL IMPORTS
import { useStateValue } from './utils/context/StateProvider';

// IMAGES
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from './utils/images/misc/cart.png';
import NavbarLogo from './utils/images/logos/navbar-logo.png';

// STYLES
import '../styles/Navbar.css';


// FUNCTIONS
const scrollToTopInstant = () => {
    window.scrollTo({
        top: 0
    })
}


function Navbar() {
    const [{ cart, user }, dispatch] = useStateValue();

    const handleAuth = () => {
        if (user) {
            auth.signOut();
        }
    }

    // OPTIONAL FIX FOR THE LOGIN LINK
    // const ConditionalLink = !user ? Link : React.DOM.div;

    return (
        <div className='navbar no-gutters'>

            {/* NOZAMA LOGO */}
            <Link to="/" onClick={scrollToTopInstant}>
                <img className="navbar-logo" alt="amazon logo"
                     src={NavbarLogo} />
            </Link>
            
            {/* SEARCH BAR */}
            <div className="navbar-search">
                <input className="navbar-search-input" type="text"/>
                <SearchIcon className="navbar-search-icon" style={{ fontSize: 36 }} />  
            </div>

            {/* NAV LINKS */}
            <div className="navbar-links">

                {/* IF NO USER, LINK TO LOGIN - ELSE LINK TO HOME */}
                <Link to={!user ? '/login' : '/'} onClick={scrollToTopInstant}>
                    <div className="navbar-links-section" onClick={handleAuth}>
                        <span className="navbar-links-line-1">
                            Hello {
                                user?.displayName ? user.displayName.charAt(0).toUpperCase() + user.displayName.slice(1).toLowerCase() 
                                : user ? user.email 
                                : "Guest"
                            }
                        </span>
                        <span className="navbar-links-line-2">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
                
                {/* RETURNS & ORDERS LINK */}
                <Link to='/orders' onClick={scrollToTopInstant}>
                    <div className="navbar-links-section">
                        <span className="navbar-links-line-1">Returns</span>
                        <span className="navbar-links-line-2">& Orders</span>
                    </div>
                </Link>

                {/* PRIME LINK - NOT BUILT OUT */}
                <div className="navbar-links-section">
                    <span className="navbar-links-line-1">Your</span>
                    <span className="navbar-links-line-2">Prime</span>
                </div>
                
                {/* CART LINK */}
                <Link to ="/shopping-cart" onClick={scrollToTopInstant}>
                    <div className="navbar-cart">
                        <img className="navbar-cart-icon" src={ShoppingCartIcon} alt="Shopping Cart" />
                        <span className="navbar-links-line-2 navbar-cart-text">Cart</span>
                        <div className="cart-count-container">
                            <span className="navbar-cart-count">
                                {cart?.length}
                            </span>
                        </div>
                        
                    </div>
                </Link>
                

            </div>
        </div>
    )
}


export default Navbar;
