import "./HeroImageStyles.css";
import React from 'react';
import IntroImg from "../assets/Mesa_Arch.jpg";
import { Link } from "react-router-dom";


const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
        <p>Hi, I'm Nicolas Ardila</p>
        <h1>Software Engineer</h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/about" className="btn-light">About</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImage
