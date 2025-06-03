import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImage2 from '../components/HeroImage2';
import WorkCard from '../components/WorkCard';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="PROJECTS" text="Some of my most recent works"/>
      <WorkCard />
      <Footer />
    </div>
  )
}

export default Project
