import React from 'react'
import './About.css';
// import banner from '../Images/service-03.jpg';
import Abt1 from '../Images/products-page-heading.jpg';
const About = () => {
  // let menu = {
  //   height: "100%",
  //   width:"100%",
  //   background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${banner})`,
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "center",
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "center",
  // }
  let Abtbg = {
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(${Abt1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

       
  }
  return (
    <div>
     <div className="container-fluid Abth1"  style={Abtbg}>
      <div className="row">
      <div className="col-md-6">
                        <h1>How We Are</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorum iure rerum sequi nulla blanditiis. Rem reprehenderit non, consequatur, tempora, facilis laborum doloremque esse harum molestiae earum inventore? Officiis, sunt..</p>
                        <p>"You are not allowed to redistribute this template ZIP file on any other website</p>
                        <p >There are 5 pages included in this HexaShop Template and we are providing it to you for absolutely free of charge at our TemplateMo website. There are web development costs for us Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorum, sit repellat dolore autem iure? Repudiandae beatae reprehenderit obcaecati consectetur explicabo minima accusamus ipsam pariatur, fuga impedit maxime, aliquam sint..</p>
                        <p className='p1'>If this template is beneficial for your website or business, please kindly support us a little via PayPal. Please also tell your friends about our great website. Thank you.</p>
                      
        </div>
          <div className="col-md-6 Abt">
              <h1 className=' Abt-heading'>We Are Hexashop</h1>
              <p className='Abt-para'>Awesome, clean & creative HTML5 Template</p>
              <button className="Abt-button">Purchase Now</button>
            </div>
        </div>
          </div>
      </div>
    
  )
}

export default About
