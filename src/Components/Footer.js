import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <body>
            <div className='footer'>
                <div className='footer-top'>
                    <a href='https://www.instagram.com/karthik_dokiparthi?igsh=YTh1dXRkemkzajZ3' className='icon'><FaInstagram /></a>
                    <a href='https://www.linkedin.com/in/karthik-dokiparthi/' className='icon'><CiLinkedin /></a>
                    <a href='https://x.com/Karthikluckky?t=2Oo7TTWpmuKYKtqXEr_E0w&s=09' className='icon'><FaXTwitter /></a>
                </div>
                <hr />
                <div className='footer-bottom'>
                    <p className='footer-bootom'>© 2024 Karthik Dokiparthi. All rights reserved.</p>
                </div>
            </div >
        </body>
    )
}

export default Footer
