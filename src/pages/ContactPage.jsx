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
            <p><strong>Location:</strong> Bangalore, India</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;
