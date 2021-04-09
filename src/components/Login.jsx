// 3RD PARTY IMPORTS
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// LOCAL IMPORTS
import { auth } from '../firebase/firebase'

// IMAGES & STYLES
import LoginLogo from './utils/images/logos/login-logo.png'
import '../styles/Login.css';


// FUNCTIONS
const scrollToTopInstant = () => {
    window.scrollTo({
        top: 0
    })
}


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

    return (
        <div className='login'>

            {/* LOGO LINK */}
            <Link to='/' onClick={scrollToTopInstant}>
                <img src={LoginLogo} alt="amazon logo" className="login-logo"/>
            </Link>

            <div className="login-container">
                <h2>Sign-in</h2>

                {/* LOGIN FORM */}
                <form>
                    <h6>Email</h6>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h6>Password</h6>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button className="login-button" onClick={signIn}>Sign In</button>
                </form>

                {/* DISCLAIMER */}
                <p>
                    By signing-in you agree to s'nozamA 
                    <span data-bs-toggle="modal" data-bs-target="#conditionsModal" className="login-container-link">
                        Conditions of Use
                    </span> and
                    <span data-bs-toggle="modal" data-bs-target="#conditionsModal" className="login-container-link">
                        Privacy Notice
                    </span>.
                </p>

                {/* <button className="login-btn" onClick={register}>Create Account</button> */}

            </div>

            {/* NEW USER OPTION */}
            <div className="new-user">
                <div className="new-user-header">
                    <hr className="new-user-header-hr" />
                    <p className="new-user-header-text">New to nozamA?</p>
                    <hr className="new-user-header-hr" />
                </div>

                {/* NEW ACCOUT LINK */}
                <Link to='/register' onClick={scrollToTopInstant}>
                    <button className="new-user-button">Create your nozamA account</button>
                </Link>

            </div>

            {/* LOGIN FOOTER */}
            <div className="login-footer">
                <hr className="login-footer-hr" />
                <div className="login-footer-links-div">
                    <div data-bs-toggle="modal" data-bs-target="#conditionsModal" className="login-footer-links">
                        Conditions of Use
                    </div>
                    <div data-bs-toggle="modal" data-bs-target="#conditionsModal" className="login-footer-links">
                        Privacy Notice
                    </div>
                    <div data-bs-toggle="modal" data-bs-target="#conditionsModal" className="login-footer-links">
                        Help
                    </div>
                </div>
                <div className="copyright">
                    &copy; 2077-2077, nozamA, Inc. or it's affiliates
                </div>
            </div>

            {/* MODAL */}
            <div className="modal fade" id="conditionsModal" tabIndex="-1" aria-labelledby="conditionsModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="conditionsModalLabel">This isn't a real website</h5>
                        </div>
                        <div className="modal-body text-center mt-3">
                            It's just a demo site I made for fun
                            <p>Not affiliated with Amazon in any way</p>
                            <p>Enjoy!</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn conditions-modal-button" data-bs-dismiss="modal">Got It</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Login;
