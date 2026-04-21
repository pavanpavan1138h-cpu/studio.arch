import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="logo">AISHWARYA<span>.ARCH</span></div>
            <p className="footer-tagline">Shaping tomorrow's spaces.</p>
          </div>
          <div className="footer-contact">
            <h3>Get in Touch</h3>
            <p>hello@aishwarya.arch</p>
            <p>+1 (555) 123-4567</p>
          </div>

        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Aishwarya Architect. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
