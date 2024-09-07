import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import '../components/navbar.css';
import Logo from '../assets/logo_image  2.png';
import MenuIcon from '../assets/ham.png'; // Ensure this path is correct

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(prevState => !prevState);

  const closeMenu = () => setIsMenuOpen(false); // Function to close the menu

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    // Add event listeners for both mouse and touch events
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, []);

  return (
    <div className="header-container" ref={containerRef}>
      <div className="header-left">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
      </div>
      <div className={`header-right ${isMenuOpen ? 'show' : ''}`}>
        <ul>
          <li>
            <NavLink to="/" className="r-underline" activeClassName="active" onClick={closeMenu}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="r-underline" activeClassName="active" onClick={closeMenu}>
              PRODUCTS
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="r-underline" activeClassName="active" onClick={closeMenu}>
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="r-underline" activeClassName="active" onClick={closeMenu}>
              CONTACT US
            </NavLink>
          </li>
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
