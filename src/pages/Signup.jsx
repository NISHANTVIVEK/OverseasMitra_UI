import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./auth.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <>
      <Navbar />
      <div className="auth-bg">
        <div className="centered-container">
          <div className="auth-card">
            <h2 className="auth-title">Create your account</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label className="auth-label">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="auth-input"
                  required
                />
              </div>
              <div>
                <label className="auth-label">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="auth-input"
                  required
                />
              </div>
              <div>
                <label className="auth-label">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="auth-input"
                  required
                />
              </div>
              <button type="submit" className="auth-btn">
                Sign Up
              </button>
            </form>
            <p className="auth-footer">
              Already have an account?{" "}
              <Link to="/login" className="auth-link">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}