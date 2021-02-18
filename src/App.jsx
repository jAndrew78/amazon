import React, { useEffect }from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import { auth } from './firebase/firebase';


function App() {

    useEffect(() => {
        
        auth.onAuthStateChanged(authUser => {
            console.log("the user is >>> ", authUser)

            if (authUser) {
                dispatchEvent({
                    type: "SET_USER",
                    user: authUser,
                })
            } else {
                dispatchEvent({
                    type: "SET_USER",
                    user: null,
                })
            }
        })
    }, []);

    return (

        <div className="app">

            <Router>

                <Navbar />

                <Switch>

                    <Route path="/login" component={ Login } />
                    <Route path="/" component={ Home } />

                </Switch>

                <Footer />

            </Router>
        </div>
  );
}


export default App;
