import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./auth.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <>
      <Navbar />
      <div className="auth-bg">
        <div className="centered-container">
          <div className="auth-card">
            <h2 className="auth-title">Welcome back</h2>
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
              <div className="auth-options">
                <label className="auth-checkbox">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  Remember me
                </label>
                <Link to="#" className="auth-link">
                  Forgot password?
                </Link>
              </div>
              <button type="submit" className="auth-btn">
                Log In
              </button>
            </form>
            <p className="auth-footer">
              Don’t have an account?{" "}
              <Link to="/signup" className="auth-link">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}