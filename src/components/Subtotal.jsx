import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './utils/context/StateProvider';
import { getCartTotal } from './utils/context/reducer';
import '../styles/Subtotal.css';


function Subtotal() {
    const history = useHistory();
    const [{ cart }, dispatch] = useStateValue();

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

export default Subtotal;
