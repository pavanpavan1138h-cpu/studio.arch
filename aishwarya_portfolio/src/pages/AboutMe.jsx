import React from 'react';
import About from '../components/About';
import Experience from './Experience';
import './AboutMe.css';

const WhoWeAre = () => {
  return (
    <main className="about-page">
      <div className="container">
        <h1 className="section-title about-page-title">About Me</h1>
      </div>
      <About />
      <Experience />
    </main>
  );
};

export default WhoWeAre;
