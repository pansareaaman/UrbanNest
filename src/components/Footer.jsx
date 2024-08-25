import React from 'react';
import './footer.css';
import{NavLink} from 'react-router-dom';
import logo from '../assets/logo_image  2.png'; // Update this path to your actual logo

const Footer = () => {
  return (
    <>

    <footer className="footer-container">
        <div className="footer">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="grid-container">
        <NavLink className="grid-item" to='/'>Home</NavLink>
        <NavLink className="grid-item" to='/about'>About</NavLink>
        <NavLink className="grid-item" to='/contact'>Contact</NavLink>
        <NavLink className="grid-item" to='/products'>Product</NavLink>
      </div>   
      </div>
      <div className="horizontal-row-wrapper3">
            <div className="horizontal-row3"></div>
    </div>
    <p className="footer-paragraph">UrbanNest Copyright © 2024 UrbanNest - All Rights Reserved</p>
    </footer>
  
    </>

  );
}

export default Footer;
