import React from 'react'
import "./Explore.css"
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import exp1 from '../Images/explore-image-01.jpg';
import exp2 from '../Images/explore-image-02.jpg';
import socail1 from '../Images/instagram-01.jpg';
import socail2 from '../Images/instagram-02.jpg';
import socail3 from '../Images/instagram-03.jpg';
import socail4 from '../Images/instagram-04.jpg';
import socail5 from '../Images/instagram-05.jpg';
import socail6 from '../Images/instagram-06.jpg';
const Explore = () => {
    let expbg = {
        height: "100%",
        width: "100%",
        background: `url(${exp1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    let expbg2 = {
        height: "100%",
        width: "100%",
        background: `url(${exp2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    let socailbg1 = {
        height: "100%",
        width: "100%",
        background: `url(${socail1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    let socailbg2 = {
        height: "100%",
        width: "100%",
        background: `url(${socail2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    let socailbg3 = {
        height: "100%",
        width: "100%",
        background: `url(${socail3})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    let socailbg4 = {
        height: "100%",
        width: "100%",
        background: `url(${socail4})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    let socailbg5 = {
        height: "100%",
        width: "100%",
        background: `url(${socail6})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    let socailbg6 = {
        height: "100%",
        width: "100%",
        background: `url(${socail5})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    return (
        <div>
            <div className="container-fluid c1">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <h1 className='h1'>Explore Our Products</h1>
                        <p className='p1'>You are allowed to use this HexaShop HTML CSS template.
                            You can feel free to modify or edit this layout. You can convert this
                            template as any kind of ecommerce CMS theme as you wish.</p>
                        <p className='p2'>"You are not allowed to redistribute this template ZIP file on any other website</p>
                        <p className='p3'>There are 5 pages included in this HexaShop Template and we are providing it to you for absolutely free of charge at our TemplateMo website. There are web development costs for us.</p>
                        <p className='p4'>If this template is beneficial for your website or business, please kindly support us a little via PayPal. Please also tell your friends about our great website. Thank you.</p>
                        <button className='button'>Discover More</button>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-3 exploremenu">
                                <div className="expcontaint">
                                    <h4>Leather Bags</h4>
                                    <p className='text-secondary'>Latest Collection</p>
                                </div>
                            </div>
                            <div className="col-3 exploremenu">
                                <div className="explimg" style={expbg}>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 exploremenu">
                                <div className="expimg2" style={expbg2}>

                                </div>
                            </div>
                            <div className="col-3 exploremenu">
                                <div className="expcontaint">
                                    <h4>Different Types</h4>
                                    <p className='text-secondary'>Over 304 Products</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className='socialtext'>Social</h1>
                        <p className='socialpara'>Details to details is what makes Hexashop different from the other themes.</p>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 simg">
                        <div className="socailimg" style={socailbg1}>
                        </div>
                        <div className="fasion">
                            <div className="fcontaint">
                                <h6>Fasion</h6>
                                <FaInstagramSquare />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 simg">
                        <div className="socailimg" style={socailbg2}>
                        </div>
                        <div className="fasion">
                            <div className="fcontaint">
                                <h6>Fasion</h6>
                                <FaInstagramSquare />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 simg">
                        <div className="socailimg" style={socailbg3}>
                        </div>
                        <div className="fasion">
                            <div className="fcontaint">
                                <h6>Fasion</h6>
                                <FaInstagramSquare />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 simg">
                        <div className="socailimg" style={socailbg4}>
                        </div>
                        <div className="fasion">
                            <div className="fcontaint">
                                <h6>Fasion</h6>
                                <FaInstagramSquare />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 simg">
                        <div className="socailimg" style={socailbg5}>
                        </div>
                        <div className="fasion">
                            <div className="fcontaint">
                                <h6>Fasion</h6>
                                <FaInstagramSquare />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 simg">
                        <div className="socailimg" style={socailbg6}>
                        </div>
                        <div className="fasion">
                            <div className="fcontaint">
                                <h6>Fasion</h6>
                                <FaInstagramSquare />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="exploreNews">
                <div className="row">
                    <div className="col-md-8">
                        <div className="newsletter px-5">
                            <h1>By Subscribing To Our Newsletter You Can Get 30% Off</h1>
                            <p className='text-secondary'>Details to details is what makes Hexashop different from the other themes.</p>
                            <div className="form">
                                <div className="inputform">
                                    <input type="text" placeholder='Your Name' /> <input type="text" placeholder='Your Email' />
                                </div>
                                <div className="teligramicon">
                                    <FaTelegramPlane />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="sociallink">
                            <h6 className='dark'>Store Location:</h6>
                            <p className='text-secondary para1'>Sunny Isles Beach, FL 33160, United States</p>
                        </div>
                        <div className="sociallink py-2">
                            <h6 className='dark'>Phone:</h6>
                            <p className='text-secondary para1'>0212-21145</p>
                        </div>
                        <div className="sociallink">
                            <h6 className='dark'>Office Location:</h6>
                            <p className='text-secondary para1'>North Miami Beach</p>
                        </div>

                    </div>
                    <div className="col-md-2">
                        <div className="sociallink">
                            <h6 className='dark'>Work Hours:</h6>
                            <p className='text-secondary para1'>07:30 AM - 9:30 PM Daily</p>
                        </div>
                        <div className="sociallink py-2">
                            <h6 className='dark'>Email:</h6>
                            <p className='text-secondary para1'>info@company.com</p>
                        </div>
                        <div className="sociallink">
                            <h6 className='dark'>Social Media:</h6>
                            <p className='text-secondary para1'>Facebook, Instagram, Behance, Linkedin</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore
