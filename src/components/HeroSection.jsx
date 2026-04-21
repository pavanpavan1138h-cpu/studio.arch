import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-bg">
        <img 
          src="https://images.unsplash.com/photo-1600607688969-a5bfcdfb4fe5?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Architecture" 
        />
        <div className="hero-overlay"></div>
      </div>
      <div className="container hero-content">
        <div className="hero-text-wrapper">
          <h1 className="hero-title">
            ARCHITECTURE, INTERIORS & EXECUTION.
          </h1>
          <p className="hero-subtitle">
            Focusing on modern, sustainable, and highly personal spaces. Welcome to this professional architectural portfolio.
          </p>
          <div className="hero-actions">
            <Link to="/portfolio" className="cta-button">View My Work</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
