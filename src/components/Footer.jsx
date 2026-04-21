import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="logo">studio<span>.m.arch</span></div>
            <p className="footer-tagline">Shaping tomorrow's spaces.</p>
          </div>
          <div className="footer-contact">
            <h3>Get in Touch</h3>
            <p>aishwarya.rk757@gmail.com</p>
            <p>+91 8951644757</p>
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
