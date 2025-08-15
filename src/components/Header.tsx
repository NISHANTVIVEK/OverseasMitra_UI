import React, { useState } from 'react';
import './Header.css';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const Header: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  };

  const openRegister = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
  };

  const closeModals = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <h2>Overseas Mitra</h2>
            </div>
            <nav className="nav">
              <a href="#personal">Personal</a>
              <a href="#business">Business</a>
              <a href="#platform">Platform</a>
              <a href="#help">Help</a>
            </nav>
            <div className="header-actions">
              <button className="btn btn-secondary" onClick={openLogin}>Log in</button>
              <button className="btn btn-primary" onClick={openRegister}>Register</button>
            </div>
          </div>
        </div>
      </header>
      
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={closeModals} 
        onSwitchToRegister={openRegister}
      />
      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={closeModals} 
        onSwitchToLogin={openLogin}
      />
    </>
  );
};

export default Header;