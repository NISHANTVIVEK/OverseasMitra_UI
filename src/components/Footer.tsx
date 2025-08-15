import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Overseas Mitra</h3>
            <p>Making international money transfers simple, fast, and affordable.</p>
          </div>
          <div className="footer-section">
            <h4>Products</h4>
            <ul>
              <li><a href="#send">Send money</a></li>
              <li><a href="#receive">Receive money</a></li>
              <li><a href="#account">Multi-currency account</a></li>
              <li><a href="#card">Debit card</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#news">News</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#help">Help center</a></li>
              <li><a href="#security">Security</a></li>
              <li><a href="#privacy">Privacy</a></li>
              <li><a href="#terms">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Overseas Mitra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;