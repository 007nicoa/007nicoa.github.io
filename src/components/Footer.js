import "./FooterStyles.css"

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{color: "fff", marginRight: "2rem"}}/>
            <div>
              <p>Phoenix, AZ</p>
            </div>
          </div>
          <div className="phone">
            <h4><FaPhone size={20} style={{color: "fff", marginRight: "2rem"}}/>
            1-224-230-7750</h4>
          </div>
          <div className="email">
            <h4><FaMailBulk size={20} style={{color: "fff", marginRight: "2rem"}}/>
            nicolasardila2001@gmail.com</h4>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>I am Nicolas Ardila. A software engineer currently based in Phoenix, AZ at American Express</p>
          <div className="social">
          <h4><FaLinkedin size={20} style={{color: "fff", marginRight: "2rem"}}/></h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
