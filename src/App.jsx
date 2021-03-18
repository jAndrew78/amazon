import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { auth } from './firebase/firebase';
import { useStateValue } from './components/utils/context/StateProvider';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Checkout from './components/Checkout.jsx';


function App() {
    const [{}, dispatch] = useStateValue();
    // const dispatch = useStateValue();

    useEffect(() => {
        
        auth.onAuthStateChanged(authUser => {
            console.log("the user is >>> ", authUser)

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
                    
                    <Route path="/checkout">
                        <Navbar />
                        <Checkout />
                        <Footer />
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
