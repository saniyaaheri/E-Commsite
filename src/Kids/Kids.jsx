import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Kids.css';
import { FaRegEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import kid1 from '../Images/kid-01.jpg';
import kid2 from '../Images/kid-02.jpg'
import kid3 from '../Images/kid-03.jpg'
const Kids = () => {
    let kids1 = {
        // height: "100%",
        width: "100%",
        background: `url(${kid1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    let kids2= {
        // height: "100%",
        width: "100%",
        background: `url(${kid2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    let kids3 = {
        // height: "100%",
        width: "100%",
        background: `url(${kid3})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    let kids4 = {
        // height: "100%",
        width: "100%",
        background: `url(${kid1})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    let kids5 = {
        // height: "100%",
        width: "100%",
        background: `url(${kid2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    let kids6 = {
        // height: "100%",
        width: "100%",
        background: `url(${kid3})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
    }
    return (
        
        <div className='container'>
             <div className="womens">
                <h1 className='h1'>Kid's Latest</h1>
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
                <div class='item c1' style={kids1}>
                    <div className="Kidsicons">
                        <ol>
                            <li><FaRegEye /></li>
                            <li><FaStar /></li>
                            <li><FaShoppingCart /></li>
                        </ol>
                    </div>
                </div>
                <div class='item c2' style={kids2}>
                <div className="Kidsicons">
                        <ol>
                            <li><FaRegEye /></li>
                            <li><FaStar /></li>
                            <li><FaShoppingCart /></li>
                        </ol>
                    </div>
                </div>
                <div class='item c3' style={kids3}>
                <div className="Kidsicons">
                        <ol>
                            <li><FaRegEye /></li>
                            <li><FaStar /></li>
                            <li><FaShoppingCart /></li>
                        </ol>
                    </div>
                </div>
                <div class='item c4' style={kids4}>
                <div className="Kidsicons">
                        <ol>
                            <li><FaRegEye /></li>
                            <li><FaStar /></li>
                            <li><FaShoppingCart /></li>
                        </ol>
                    </div>
                </div>
                <div class='item c5' style={kids5}>
                <div className="Kidsicons">
                        <ol>
                            <li><FaRegEye /></li>
                            <li><FaStar /></li>
                            <li><FaShoppingCart /></li>
                        </ol>
                    </div>
                </div>
                <div class='item c6' style={kids6}>
                <div className="Kidsicons">
                        <ol>
                            <li><FaRegEye /></li>
                            <li><FaStar /></li>
                            <li><FaShoppingCart /></li>
                        </ol>
                    </div>
                </div>
            </OwlCarousel>;
        </div>
    )
}

export default Kids