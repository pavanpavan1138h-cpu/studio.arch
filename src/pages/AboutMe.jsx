import React from 'react';
import About from '../components/About';
import Experience from './Experience';
import './AboutMe.css';

const WhoWeAre = () => {
  return (
    <main className="about-page">
      <About />
      <Experience />
    </main>
  );
};

export default WhoWeAre;
