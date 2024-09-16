import React from 'react';
import './ContactUs.css'; // Make sure to create this CSS file for styling

const ContactUs = () => (
  <div className="contact-container">
    <header className="contact-header">
      <h1>Contact Us</h1>
      <p>Get in touch with our team using the contact information below.</p>
    </header>
    <section className="contact-list">
      <div className="contact-item">
        <div className="contact-avatar">👨‍💼</div>
        <div className="contact-info">
          <h2>John Doe</h2>
          <p>Position: CEO</p>
          <p>Email: john.doe@example.com</p>
        </div>
      </div>
      <div className="contact-item">
        <div className="contact-avatar">👩‍💼</div>
        <div className="contact-info">
          <h2>Jane Smith</h2>
          <p>Position: Marketing Manager</p>
          <p>Email: jane.smith@example.com</p>
        </div>
      </div>
      <div className="contact-item">
        <div className="contact-avatar">🧑</div>
        <div className="contact-info">
          <h2>Michael Brown</h2>
          <p>Position: Lead Developer</p>
          <p>Email: michael.brown@example.com</p>
        </div>
      </div>
      <div className="contact-item">
        <div className="contact-avatar">🧑</div>
        <div className="contact-info">
          <h2>Emily Johnson</h2>
          <p>Position: Customer Support</p>
          <p>Email: emily.johnson@example.com</p>
        </div>
      </div>
    </section>
  </div>
);

export default ContactUs;
