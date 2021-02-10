import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';


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
