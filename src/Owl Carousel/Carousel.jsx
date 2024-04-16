import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Carousel.css';
import { FaRegEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import exp1 from '../Images/men-01.jpg';
import exp2 from '../Images/men-02.jpg'
import exp3 from '../Images/men-03.jpg'
import '@fortawesome/fontawesome-free/css/all.css';

const Carousel = () => {
    let men1 = {
        // height: "100%",
        width: "100%",
        background: `url(${exp1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    let men2= {
        // height: "100%",
        width: "100%",
        background: `url(${exp2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    let men3 = {
        // height: "100%",
        width: "100%",
        background: `url(${exp3})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    let men4 = {
        // height: "100%",
        width: "100%",
        background: `url(${exp1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    let men5 = {
        // height: "100%",
        width: "100%",
        background: `url(${exp2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    let men6 = {
        // height: "100%",
        width: "100%",
        background: `url(${exp3})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    return (
        <div className='container'>
            <OwlCarousel className='owl-theme' 
            loop 
            margin={25} 
            nav
            dots={false}
            // navText={ [<FcNext />,<FcPrevious />]}
            autoplay={false}
            items={3}
            center={true}
            >
                <div class='item c1' style={men1}>
                    <div className="menicons">
                        <ol>
                            <li><FaRegEye /></li>
                            <li><FaStar /></li>
                            <li><FaShoppingCart /></li>
                        </ol>
                    </div>
                </div>
                <div class='item c2' style={men2}>
                <div className="menicons">
                        <ol>
                            <li><FaRegEye /></li>
                            <li><FaStar /></li>
                            <li><FaShoppingCart /></li>
                        </ol>
                    </div>
                </div>
                <div class='item c3' style={men3}>
                <div className="menicons">
                        <ol>
                            <li><FaRegEye /></li>
                            <li><FaStar /></li>
                            <li><FaShoppingCart /></li>
                        </ol>
                    </div>
                </div>
                <div class='item c4' style={men4}>
                <div className="menicons">
                        <ol>
                            <li><FaRegEye /></li>
                            <li><FaStar /></li>
                            <li><FaShoppingCart /></li>
                        </ol>
                    </div>
                </div>
                <div class='item c5' style={men5}>
                <div className="menicons">
                        <ol>
                            <li><FaRegEye /></li>
                            <li><FaStar /></li>
                            <li><FaShoppingCart /></li>
                        </ol>
                    </div>
                </div>
                <div class='item c6' style={men6}>
                <div className="menicons">
                        <ol>
                            <li><FaRegEye /></li>
                            <li><FaStar /></li>
                            <li><FaShoppingCart /></li>
                        </ol>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    )
}

export default Carousel
