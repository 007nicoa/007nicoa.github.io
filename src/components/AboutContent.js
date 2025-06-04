import "./AboutContentStyles.css"
import Vertx from "../assets/Vertx.png"
// import SpringBoot from "../assets/SpringBoot.png"
import Java from "../assets/Java.png"

import React from 'react'
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I am a software engineer. I mainly have worked in Java, working in the web frameworks of VertX and SpringBoot. However, my interests have taken me into other spaces like ReactJS, Go, and more.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={Vertx} className="img" alt="true"/>
          </div>
          <div className="img-stack bottom">
            <img src={Java} className="img" alt="true"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
