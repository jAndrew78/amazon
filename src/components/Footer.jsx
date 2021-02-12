import React from 'react';
import '../styles/Footer.css';


const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

function Footer() {
    return (
        <div className="footer">
            <div className='footer-link-to-top' onClick={scrollToTop}>Back to top</div>
            <div className='footer-1'></div>
            <div className='footer-2'></div>
            <div className='footer-3'></div>
        </div>
        
    )
}


export default Footer;
