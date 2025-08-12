import React from "react";
import { Link } from "react-router-dom";
import "./navbar-footer.css";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="centered-container">
        <div>
          <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
          <span> | </span>
          <Link to="/terms" className="footer-link">Terms of Service</Link>
        </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} Project-x. All rights reserved.
        </div>
      </div>
    </footer>
  );
}