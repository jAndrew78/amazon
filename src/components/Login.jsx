import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase/firebase'
import '../styles/Login.css';

import LoginLogo from './utils/images/logos/login-logo.png'


function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then(auth => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message)) 
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img src={LoginLogo} alt="amazon logo" className="login-logo"/>
            </Link>

            <div className="login-container">
                <h1>Sign-in</h1>

                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button className="login-btn" onClick={signIn}>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to s'nozamA 
                    <Link to='/' target="_blank" className="login-container-link">Conditions of Use</Link> and
                    <Link to='/' target="_blank" className="login-container-link">Privacy Notice.</Link>
                </p>

                {/* <button className="login-btn" onClick={register}>Create Account</button> */}

            </div>

            <div className="register">
                <div className="register-header">
                    <hr className="register-header-hr" />
                    <p className="register-header-text">New to nozamA?</p>
                    <hr className="register-header-hr" />
                </div>

                <button className="login-register-btn">Create your nozamA account</button>

            </div>

            <div className="sign-in-footer">
                <hr className="sign-in-footer-hr" />
                <div className="sign-in-footer-links-div">
                    <Link to='/' target="_blank" className="sign-in-footer-links">Conditions of Use</Link>
                    <Link to='/' target="_blank" className="sign-in-footer-links">Privacy Notice</Link>
                    <Link to='/' target="_blank" className="sign-in-footer-links">Help</Link>
                </div>
                <div className="copyright">
                    &copy; 2077-2077, nozamA, Inc. or it's affiliates
                </div>
            </div>

        </div>
    )
}


export default Login;
