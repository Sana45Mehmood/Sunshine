import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faLinkedin, faWhatsapp  } from '@fortawesome/free-brands-svg-icons'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons'
export default function Footer() {
  return (
    <div className="Main">
      <section className="footer">

<div className="box-container">
<div className="box">
        <h3>Catagories</h3>
        <a href="#">  <i className="fas fa-arrow-right"></i> <FontAwesomeIcon icon={faPizzaSlice }/>  Veg-Pizza </a>
        <a href="#"> <i className="fas fa-arrow-right"></i> <FontAwesomeIcon icon={faPizzaSlice }/>  Non-Veg Pizza </a>
    </div>
    
    <div className="box">
        <h3>About Us</h3>
        <a href="#"> <i className="fas fa-arrow-right"></i> Our Mission is to Filling your Tummy with Delicious & Yummy pizza With Fast & Free Delivery </a>
    </div>
    <div className="box">
        <h3>Follow Us</h3>
        <a href="https://www.facebook.com/" target={"_self"}> <i className="fas fa-arrow-right"></i> <FontAwesomeIcon icon={faFacebook }/>  Facebook </a>
        <a href="https://www.instagram.com/accounts/login/" target={"_self"}> <i className="fas fa-arrow-right"></i> <FontAwesomeIcon icon={faInstagram }/> Instagram </a>
        <a href="https://web.whatsapp.com/" target={"_self"}> <i className="fas fa-arrow-right"></i>  <FontAwesomeIcon icon={faWhatsapp }/> Whatsapp </a>
        <a href="https://pk.linkedin.com/" target={"_self"}>  <i className="fas fa-arrow-right"></i> <FontAwesomeIcon icon={faLinkedin}/>   Linkedin </a>
    </div>

</div>

<div className="credit">  <span> &copy;{new Date().getFullYear()}  SunShine Pizza Co-All Right Reserved</span>   </div>

</section>

    </div>
  )
}
