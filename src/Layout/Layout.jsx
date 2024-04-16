import React from 'react'
import './Layout.css';
import { Outlet, Link, NavLink } from "react-router-dom";
import logo from '../Images/logo.png';
const Layout = () => {
  return (
    <div>
      <nav className="Navbar">
        <div className="logo">
            <Link to='/'><img src={logo} alt="logo" /></Link>
        </div>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Mens">Mens's</NavLink></li>
            <li><NavLink to="/Womens">Womens's</NavLink></li>
            <li><NavLink to="/Kids">Kid's</NavLink></li>
      
         <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/Explore">Explore</NavLink></li>
            
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default Layout
