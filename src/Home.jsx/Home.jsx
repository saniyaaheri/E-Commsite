import React from 'react'
import './Home.css';
import banner from '../Images/left-banner-image.jpg';
import menbg from '../Images/baner-right-image-02.jpg';
import womenbg from '../Images/baner-right-image-01.jpg';
import kidsbg from '../Images/baner-right-image-03.jpg';
import accbg from '../Images/baner-right-image-04.jpg';
const Home = () => {
  let menu = {
    height: "500px",
    background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${banner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  }
  let men = {
    background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${menbg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  }
  let women = {
    background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${womenbg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  }
  let kids = {
    background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${kidsbg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  }
  let acc = {
    background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${accbg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  }
  return (
    <div>
      <div className="container-fluid">
        <div className="row pt-5 m-2">
          {/* Main Banner */}
          <div className="col-md-6">
            <div className="banner" style={menu}>
              <h1 className='heading'>We Are Hexashop</h1>
              <p className='bannerpara'>Awesome, clean & creative HTML5 Template</p>
              <button className="banner-button">Purchase Now</button>
            </div>
          </div>
          {/* Main Banner End*/}

          {/* catagory */}
          <div className="col-md-3">
            <div className="catagory men" style={men}>
              <div className="mensheading">
                <h2>Men</h2>
                <p>Best Cloths For Men</p>
              </div>
              <div className="containt_catagory">
                <h2>Men</h2>
                <p>Lorem ipsum dolor sit, amet consectetur 
                  adipisicing elit. Molestiae quas adipisci
                   quis magnam vel delectus</p>
                   <button>Discovermore</button>
              </div>
            </div>
            <div className="catagory mt-4 " style={women}>
            <div className="mensheading">
                <h2>Women</h2>
                <p>Best Cloths For women</p>
              </div>
              <div className="containt_catagory">
                <h3>Women's</h3>
                <p>Lorem ipsum dolor sit, amet consectetur 
                  adipisicing elit. Molestiae quas adipisci
                   quis magnam vel delectus</p>
                   <button>Discovermore</button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="catagory" style={kids}>
            <div className="mensheading">
                <h2>kid's</h2>
                <p>Best Cloths For kid's</p>
              </div>
              <div className="containt_catagory">
                <h3>Kid's</h3>
                <p>Lorem ipsum dolor sit, amet consectetur 
                  adipisicing elit. Molestiae quas adipisci
                   quis magnam vel delectus</p>
                   <button>Discovermore</button>
              </div>
            </div>
            <div className="catagory mt-4" style={acc}>
            <div className="mensheading">
                <h2>Accessories</h2>
                <p>Best Cloths For Men</p>
              </div>
              <div className="containt_catagory">
                <h3>Accessories</h3>
                <p>Lorem ipsum dolor sit, amet consectetur 
                  adipisicing elit. Molestiae quas adipisci
                   quis magnam vel delectus</p>
                   <button>Discovermore</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
