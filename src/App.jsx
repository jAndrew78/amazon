// 3RD PARTY IMPORTS
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { auth } from './firebase/firebase';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

// LOCAL IMPORTS
import { useStateValue } from './components/utils/context/StateProvider';

// STYLES
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// COMPONENTS
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import ShoppingCart from './components/ShoppingCart.jsx';
import Checkout from './components/Checkout.jsx';


const promise = loadStripe(
    "pk_test_51Ie323IRh5MugjDmOPqUjKYmBqR9H77d51jLjD8IjYe4GhOe5K1E5Pu4CpNE3MmoD63PL2LEUJteQPjwEWPUKTkF00PviyPzHO"
)


function App() {
    const [{}, dispatch] = useStateValue();
    // const dispatch = useStateValue();

    useEffect(() => {
        
        auth.onAuthStateChanged(authUser => {
            // console.log("the user is >>> ", authUser)

            if (authUser) {
                dispatch({
                    type: "SET_USER",
                    user: authUser
                })
            } else {
                dispatch({
                    type: "SET_USER",
                    user: null
                })
            }
        })
    }, [dispatch]);

    return (

        <div className="app">

            <Router>

                <Switch>

                    <Route path="/login" component={ Login } />

                    <Route path="/register" component={ Register } />
                    
                    <Route path="/shopping-cart">
                        <Navbar />
                        <ShoppingCart />
                        <Footer />
                    </Route>
                    
                    <Route path="/checkout">
                        <Navbar />
                        <Elements stripe={promise}>
                            <Checkout />
                        </Elements>
                    </Route>
                    
                    <Route path="/">
                        <Navbar />
                        <Home />
                        <Footer />
                    </Route>
                    

                </Switch>

            </Router>
        </div>
  );
}


export default App;
