import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage2 from '../components/HeroImage2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="About Me" text="I'm a Full Stack Engineer in Phoenix, AZ. I work mainly on the API side of things."/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
