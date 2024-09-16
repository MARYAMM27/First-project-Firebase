import React from 'react';
import './About.css'; // Make sure to create this CSS file for styling

const About = () => (
  <div className="about-container">
    <header className="about-header">
      <h1>About Us</h1>
      <p>Learn more about our organization and what we stand for.</p>
    </header>
    <section className="info-section">
      <div className="stock-info">
        <h2>Stock Information</h2>
        <p>Current Price: $123.45</p>
        <p>Market Cap: $1.23B</p>
        <p>Volume: 1.23M</p>
      </div>
      <div className="progress-bars">
        <div className="progress-bar">
          <label>Performance:</label>
          <div className="bar" style={{ width: '75%' }}></div>
        </div>
        <div className="progress-bar">
          <label>Customer Satisfaction:</label>
          <div className="bar" style={{ width: '85%' }}></div>
        </div>
        <div className="progress-bar">
          <label>Growth:</label>
          <div className="bar" style={{ width: '60%' }}></div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
