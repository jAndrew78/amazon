import React from 'react';
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './utils/context/StateProvider';
import { getCartTotal } from './utils/context/reducer';
import '../styles/Subtotal.css';


const scrollToTopInstant = () => {
    window.scrollTo({
        top: 0
    })
}


function Subtotal() {
    const history = useHistory();
    const [{ cart }, dispatch] = useStateValue();


    if (cart?.length === 0) {
        return (
            <div className="subtotal-empty">
                <p>Your Cart is Empty...</p>
                <Link to='/' onClick={scrollToTopInstant}>
                    <button className="subtotal-button">Go Buy Things!!!</button>
                </Link> 
            </div>
        )
    } else {
        return (
            <div className="subtotal">
                <CurrencyFormat
                    renderText={value => (
                        <>
                            <p>
                                {/* ??? */}
                                Subtotal ({cart.length} items): <strong>{value}</strong>
                            </p>
                            <small className="subtotal-gift">
                                <input type="checkbox" /> This order contains a gift
                            </small>
                        </>
                    )}
                    decimalScale={2}
                    value={getCartTotal(cart)} // ???
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                />

                <button className="subtotal-button">Proceed to Checkout</button>
            </div>
        )
    }
    
}

export default Subtotal;
