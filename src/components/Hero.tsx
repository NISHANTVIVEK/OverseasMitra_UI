import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Money without borders</h1>
            <p>Send money abroad at the real exchange rate with no hidden fees.</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">13M+</span>
                <span className="stat-label">customers</span>
              </div>
              <div className="stat">
                <span className="stat-number">£8B</span>
                <span className="stat-label">sent every month</span>
              </div>
              <div className="stat">
                <span className="stat-number">80+</span>
                <span className="stat-label">countries</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="app-interface">
                  <div className="balance">₹1,25,000</div>
                  <div className="quick-actions">
                    <div className="action">Send</div>
                    <div className="action">Receive</div>
                    <div className="action">Convert</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;