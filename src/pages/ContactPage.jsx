import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <main className="contact-page">
      <div className="container contact-container">
        <h1 className="section-title">Contact</h1>
        <section className="contact-content fade-in">
          <h3>Get In Touch</h3>
          <p>
            I am currently open for exciting new opportunities, collaborations, or freelance projects. Feel free to reach out directly via email.
          </p>
          <div className="contact-info-card">
            <p><strong>Email:</strong> <a href="mailto:Manojkumarps25302@gmail.com" className="contact-link">Manojkumarps25302@gmail.com</a></p>
            <p><strong>Mobile:</strong> <a href="tel:+918105864508" className="contact-link">+91 8105864508</a></p>
            <p><strong>Location:</strong> Bangalore, India</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;
