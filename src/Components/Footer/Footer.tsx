import React from 'react'
import './Footer.css'
// import Footer_logo from '../../assets/footer_logo.svg';
import User_icon from '../../assets/user_icon.svg';
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                {/* <img src={Footer_logo} alt="" /> */}
                <h1 className="logo">AMAL</h1>
                <p>Innovative Front-End Developer from Kerala, India, with 3 years of expertise crafting seamless, responsive, and engaging web experiences.</p>
            </div>
            <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={User_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-right">© 2024 Amaljith. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Terms of service</p>
            <p>Privacy Policy</p>
            <p>Connect with Me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
