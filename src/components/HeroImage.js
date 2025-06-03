import "./HeroImageStyles.css";
import React from 'react';
import IntroImg from "../assets/Moonrise_Amherst.jpg";
import { Link } from "react-router-dom";


const HeroImage = () => {
  return (
    <div className="hero">
      <div>
        <img className="intro-img" src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
        <p>Hi, I'm Nicolas Ardila</p>
        <h1>Software Engineer</h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImage
