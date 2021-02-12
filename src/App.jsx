import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';


function App() {
    return (

        <div className="app">

            <Router>

                <Navbar />

                <Switch>

                    <Route path="/" component={ Home } />

                </Switch>

                <Footer />

            </Router>
        </div>
  );
}


export default App;
