import "./AboutContentStyles.css"
import Vertx from "../assets/Vertx.png"
// import SpringBoot from "../assets/SpringBoot.png"
import Java from "../assets/JavaWhiteBackground.jpg"
import React from 'react'
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I am a software engineer interested in the intersection of Mathematics and Computer Science. With experience in distributed computing research, API development, and large scale applications, I work as an engineer at American Express. My work has been in the realm of Java, using the frameworks of SpringBoot and VertX. Furthermore, my interests have taken me into other spaces like ReactJS, Go, and more.</p>
        <Link to="/project">
          <button className="btn">Projects</button>
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
