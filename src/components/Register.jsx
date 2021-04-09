// 3RD PARTY IMPORTS
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// LOCAL IMPORTS
import { auth } from '../firebase/firebase'

// IMAGES & STYLES
import LoginLogo from './utils/images/logos/login-logo.png'
import '../styles/Register.css';


// FUNCTIONS
const scrollToTopInstant = () => {
    window.scrollTo({
        top: 0
    })
}


function Register() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then(function(result) {
                return result.user.updateProfile({
                    displayName: displayName
                })
            })
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message)) 
    }

    return (
        <div className='register'>

            {/* LOGO LINK */}
            <Link to='/' onClick={scrollToTopInstant}>
                <img src={LoginLogo} alt="amazon logo" className="login-logo"/>
            </Link>

            <div className="register-container">
                <h2>Create Account</h2>

                {/* REGISTRATION FORM */}
                <form>
                    <h6>Your Name</h6>
                    <input type="text" value={displayName} onChange={e => setDisplayName(e.target.value)} />
                    
                    <h6>Email</h6>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h6>Password</h6>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button className="register-button" onClick={register}>Create Your nozamA Account</button>
                </form>

                {/* DISCLAIMER */}
                <p>
                    By creating an account you agree to s'nozamA 
                    <span data-bs-toggle="modal" data-bs-target="#conditionsModal" className="register-container-link">
                        Conditions of Use
                    </span> and
                    <span data-bs-toggle="modal" data-bs-target="#conditionsModal" className="register-container-link">
                        Privacy Notice
                    </span>.
                </p>

                <hr className="register-container-hr" />

                {/* SIGN IN / BUSINESS LINKS */}
                <p>
                    Already have an account?
                    <Link to='/login' onClick={scrollToTopInstant}>
                        <span className="register-container-link">Sign-in &#9656;</span>
                    </Link>
                    <br/>
                    Purchasing for work? 
                    <span data-bs-toggle="modal" data-bs-target="#conditionsModal" className="register-container-link">
                        Create a business account &#9656;
                    </span>
                </p>

                {/* SPACING */}
                <p>
                </p>


                {/* <button className="register-btn" onClick={register}>Create Account</button> */}

            </div>

            {/* REGISTRATION PAGE FOOTER */}
            <div className="register-footer">
                <hr className="register-footer-hr" />
                <div className="register-footer-links-div">
                    <div data-bs-toggle="modal" data-bs-target="#conditionsModal" className="register-footer-links">
                        Conditions of Use
                    </div>
                    <div data-bs-toggle="modal" data-bs-target="#conditionsModal" className="register-footer-links">
                        Privacy Notice
                    </div>
                    <div data-bs-toggle="modal" data-bs-target="#conditionsModal" className="register-footer-links">
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


export default Register;
