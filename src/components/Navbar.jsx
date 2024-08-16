import React from 'react'
import { NavLink } from 'react-router-dom'
import '../components/navbar.css'
import Logo from '../assets/logo_image  1.png'
const Navbar = () => {
  return (
   <>
   <div className="header-container">
    <div className="header-left">
        {/* <div className="logo"><img src={Logo} alt="" /></div> */}
        <div className="logo">Logo</div>
    </div>
    <div className="header-right">
        <ul>
            <li><NavLink to="/" className="r-underline">HOME</NavLink></li>
            <li><NavLink to="products" className="r-underline">PRODUCTS</NavLink></li>
            <li><NavLink to="about" className="r-underline">ABOUT US</NavLink></li>
            <li><NavLink to="contact" className="r-underline">CONTACT US</NavLink></li>
        </ul>

    </div>
   </div>
   
   </>
  )
}

export default Navbar
