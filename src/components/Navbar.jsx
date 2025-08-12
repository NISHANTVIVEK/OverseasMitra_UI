import React from "react";
import { Link } from "react-router-dom";
import "./navbar-footer.css";

export default function Navbar() {
  return (
    <div className="navbar-bg">
      <nav className="main-navbar centered-container">
        <div className="navbar-brand">
          <span className="brand-logo">📈</span>
          <span className="brand-name">Project-x</span>
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="#">About</Link></li>
          <li><Link to="#">Contact</Link></li>
        </ul>
        <div className="navbar-actions">
          <Link to="/login" className="navbar-login-btn">Login</Link>
          <Link to="/signup" className="navbar-signup-btn">Sign Up</Link>
        </div>
      </nav>
    </div>
  );
}