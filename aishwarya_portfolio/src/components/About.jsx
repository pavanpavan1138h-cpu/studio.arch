import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1541888081682-1df6bce1eb58?q=80&w=1954&auto=format&fit=crop" 
              alt="Aishwarya Profile" 
            />
          </div>
          <div className="about-text">
            <h1 className="about-name">AISHWARYA</h1>
            <h2 className="section-title">Architectural Philosophy</h2>
            <p>
              I believe that architecture is more than just erecting walls; it is about sculpting the void. With over meticulous attention to detail, my work aims to seamlessly integrate the built environment with natural surroundings, bringing forward a dialogue between light, material, and space.
            </p>
            <p>
              Whether it is a minimalist retreat or an expansive commercial plaza, my approach remains the same: create with intention, build with integrity, and always place the human experience at the core of every project.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h4>15+</h4>
                <span>Projects Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
