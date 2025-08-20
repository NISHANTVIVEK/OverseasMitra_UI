import React, { useState } from 'react';
import './AuthModal.css';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void;
  onLoginSuccess: (email: string, hasProfile: boolean) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onSwitchToRegister, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });
      
      if (response.ok) {
        // Store email in session
        sessionStorage.setItem('userEmail', email);
        
        // Check user profile
        const userDataResponse = await fetch(`/api/UserData/${encodeURIComponent(email)}`, {
          headers: {
            'accept': '*/*'
          }
        });
        
        if (userDataResponse.ok) {
          const userData = await userDataResponse.json();
          const hasProfile = userData.user_Profile !== null;
          onClose();
          onLoginSuccess(email, hasProfile);
        } else {
          alert('Failed to fetch user data.');
        }
      } else {
        const error = await response.text();
        alert(`Login failed: ${error}`);
      }
    } catch (error) {
      alert('Network error. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} style={{
      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%)'
    }}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Log in to Overseas Mitra</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary auth-btn">Log in</button>
        </form>
        <p className="auth-switch">
          Don't have an account? 
          <button type="button" onClick={onSwitchToRegister} className="link-btn">
            Register here
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;