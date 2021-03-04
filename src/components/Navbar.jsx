import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase';
import { useStateValue } from './utils/context/StateProvider';
import '../styles/Navbar.css';

// IMAGES
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from './utils/images/misc/cart.png';
import NavbarLogo from './utils/images/logos/navbar-logo.png';


function Navbar() {
    const [{ cart, user }, dispatch] = useStateValue();

    const handleAuth = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='navbar'>
            <Link to="/">
                <img className="navbar-logo" alt="amazon logo"
                     src={NavbarLogo} />
            </Link>
            

            <div className="navbar-search">
                <input className="navbar-search-input" type="text"/>
                <SearchIcon className="navbar-search-icon" style={{ fontSize: 36 }} />  
            </div>

            <div className="navbar-links">

                <Link to={!user && '/login'}>
                    <div className="navbar-links-section" onClick={handleAuth}>
                        <span className="navbar-links-line-1">Hello {user ? user.email : "Guest"}</span>
                        <span className="navbar-links-line-2">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>
                
                <Link to='/orders'>
                    <div className="navbar-links-section">
                        <span className="navbar-links-line-1">Returns</span>
                        <span className="navbar-links-line-2">& Orders</span>
                    </div>
                </Link>

                <div className="navbar-links-section">
                    <span className="navbar-links-line-1">Your</span>
                    <span className="navbar-links-line-2">Prime</span>
                </div>
                
                <Link to ="checkout">
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
