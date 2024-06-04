import React from 'react'
import './Layout.css';
import { Outlet, Link, NavLink } from "react-router-dom";
import logo from '../Images/logo.png';
const Layout = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link to='/' className='navbar-brand'><img src={logo} alt="logo" /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link " to="/Mens">Mens's</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/Womens">Womens's</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/Kids">Kid's</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/about">About Us</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/Explore">Explore</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        
                <div className="container-fluid">
        
            <Link to='/'className='navbar-brand'><img src={logo} alt="logo" /></Link>
        
                  
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link "  to="/Mens">Mens's</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Womens">Womens's</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link "  to="/Kids">Kid's</NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/about">About Us</NavLink>
                            </li>to="/about"
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/Explore">Explore</NavLink>
                            </li>
                      
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
       */}
            {/* <nav className="Navbar">
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
      <Outlet /> */}
        </div>
    )
}

export default Layout
