import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Womens.css';
import { FaRegEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Wom1 from '../Images/women-01.jpg';
import Wom2 from '../Images/women-02.jpg'
import Wom3 from '../Images/women-03.jpg'
const Womens = () => {
    let Women1 = {
        // height: "100%",
        width: "100%",
        background: `url(${Wom1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    let Women2= {
        // height: "100%",
        width: "100%",
        background: `url(${Wom2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    let Women3 = {
        // height: "100%",
        width: "100%",
        background: `url(${Wom3})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    let Women4 = {
        // height: "100%",
        width: "100%",
        background: `url(${Wom1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    let Women5 = {
        // height: "100%",
        width: "100%",
        background: `url(${Wom2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    let Women6 = {
        // height: "100%",
        width: "100%",
        background: `url(${Wom3})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    return (
       <div>
            
      
        <div className='container'>
        <div className="womens">
                <h1 className='h1'>Women's Latest</h1>
                <p className='p1'>Details to details is what makes Hexashop different from the other themes.</p>
            </div>
            <OwlCarousel className='owl-theme' 
            loop 
            margin={25} 
            nav
            dots={false}
            autoplay={false}
            items={3}
            center={true}
            >
                <div class='item c1' style={Women1}>
                    <div className="Womenicons">
                        <ol>
                            <li><FaRegEye /></li>
                            <li><FaStar /></li>
                            <li><FaShoppingCart /></li>
                        </ol>
                    </div>
                </div>
                <div class='item c2' style={Women2}>
                <div className="Womenicons">
                        <ol>
                            <li><FaRegEye /></li>
                            <li><FaStar /></li>
                            <li><FaShoppingCart /></li>
                        </ol>
                    </div>
                </div>
                <div class='item c3' style={Women3}>
                <div className="Womenicons">
                        <ol>
                            <li><FaRegEye /></li>
                            <li><FaStar /></li>
                            <li><FaShoppingCart /></li>
                        </ol>
                    </div>
                </div>
                <div class='item c4' style={Women4}>
                <div className="Womenicons">
                        <ol>
                            <li><FaRegEye /></li>
                            <li><FaStar /></li>
                            <li><FaShoppingCart /></li>
                        </ol>
                    </div>
                </div>
                <div class='item c5' style={Women5}>
                <div className="Womenicons">
                        <ol>
                            <li><FaRegEye /></li>
                            <li><FaStar /></li>
                            <li><FaShoppingCart /></li>
                        </ol>
                    </div>
                </div>
                <div class='item c6' style={Women6}>
                <div className="Womenicons">
                        <ol>
                            <li><FaRegEye /></li>
                            <li><FaStar /></li>
                            <li><FaShoppingCart /></li>
                        </ol>
                    </div>
                </div>
            </OwlCarousel>;
        </div>
        </div>
    )
}

export default Womens 


