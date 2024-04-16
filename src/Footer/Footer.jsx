import React from 'react'
import logo from '../Images/white-logo.png';
import './Footer.css'
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
    let designer="Saniya Aheri and Team"
    return (
        <div>
            <div className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="footerimg">
                                <img src={logo} alt="footerimage" />
                                <div className="flink">
                                    <ol>
                                        <li>
                                            <a href="/">jghgsdhjsdhjgae</a>
                                        </li>
                                        <li>
                                            <a href="/">saniyabijapur@gmail.com</a>
                                        </li>
                                        <li>
                                            <a href="/">08352 222 220</a>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h6>Shopping and Category</h6>                           
                            <div className="flink">
                                <ol>
                                    <li>
                                        <a href="/">Men's Shopping</a>
                                    </li>
                                    <li>
                                    <a href="/">Women's Shopping</a>
                                    </li>
                                    <li>
                                        <a href="/">Kids Shopping</a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <h6>USefull Links</h6>                           
                            <div className="flink">
                                <ol>
                                    <li>
                                        <a href="/">Homepage</a>
                                    </li>
                                    <li>
                                    <a href="/">About us</a>
                                    </li>
                                    <li>
                                        <a href="/">Help</a>
                                    </li>
                                    <li>
                                        <a href="/">Contact us</a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <h6>Helpfull Information</h6>                           
                            <div className="flink">
                                <ol>
                                    <li>
                                        <a href="/">Help</a>
                                    </li>
                                    <li>
                                    <a href="/">FAQ's</a>
                                    </li>
                                    <li>
                                        <a href="/">shipping</a>
                                    </li>
                                    <li>
                                        <a href="/">Tracking ID</a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                <div className="footercopyright">
                <p>Copyright @ 2024 Hexashpo.Co.Ltd. All Rights and Reserved.</p>
                <h6>Designed by:{designer}</h6>
                <div className="icons">
                            <ol>
                                <li><FaFacebookF /></li>
                                <li><FaTwitter /></li>
                                <li><FaLinkedin /></li>
                                <li><FaInstagramSquare /></li>
                            </ol>
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
