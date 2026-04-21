import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="logo">STUDIO<span>.M.ARCH</span></div>
            <p className="footer-tagline">Shaping tomorrow's spaces.</p>
          </div>
          <div className="footer-contact">
            <h3>Get in Touch</h3>
            <p>Manojkumarps25302@gmail.com</p>
            <p>+91 8105864508</p>
            <p>Bangalore, India</p>
          </div>

        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} studio.m.arch. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
