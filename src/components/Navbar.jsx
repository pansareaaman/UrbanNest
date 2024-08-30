import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../components/navbar.css';
import Logo from '../assets/logo_image  2.png';
import MenuIcon from '../assets/ham.png'; // Ensure this path is correct

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prevState => !prevState);

  return (
    <div className="header-container">
      <div className="header-left">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
      <div className={`header-right ${isMenuOpen ? 'show' : ''}`}>
        <ul>
          <li><NavLink to="/" className="r-underline" activeClassName="active">HOME</NavLink></li>
          <li><NavLink to="/products" className="r-underline" activeClassName="active">PRODUCTS</NavLink></li>
          <li><NavLink to="/about" className="r-underline" activeClassName="active">ABOUT US</NavLink></li>
          <li><NavLink to="/contact" className="r-underline" activeClassName="active">CONTACT US</NavLink></li>
        </ul>
      </div>
      <div 
        className="header-menu-toggle" 
        onClick={toggleMenu} 
        aria-expanded={isMenuOpen ? 'true' : 'false'}
      >
        <img src={MenuIcon} alt="Menu Icon" />
      </div>
    </div>
  );
};

export default Navbar;
