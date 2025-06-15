import "./FooterStyles.css"

import React from 'react'
import { FaHome, FaGithub, FaLinkedin } from "react-icons/fa";

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
          <div className="social">
            <p><FaLinkedin size={20} style={{color: "fff", marginRight: "2rem"}}/>
              <a href="https://www.linkedin.com/in/nico-ardila/" target="_blank">My LinkedIn</a>
            </p>
          </div>
          <div className="github">
            <p><FaGithub size={20} style={{color: "fff", marginRight: "2rem"}}/>
              <a href="https://github.com/007nicoa" target="_blank">My Github</a>
            </p>
          </div>
        </div>
        <div className="right">
          <h4>About Me</h4>
          <p>I am Nicolas Ardila. A software engineer currently based in Phoenix, AZ</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
