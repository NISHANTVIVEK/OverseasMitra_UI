import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TransferForm from './components/TransferForm';
import Features from './components/Features';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import ResidencyForm from './components/ResidencyForm';
import AccountForm from './components/AccountForm';
import TransactionForm from './components/TransactionForm';
import './App.css';

function App() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showResidency, setShowResidency] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showTransaction, setShowTransaction] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = (email: string, hasProfile: boolean) => {
    setUserEmail(email);
    if (hasProfile) {
      setIsLoggedIn(true);
    } else {
      setShowProfile(true);
    }
  };

  const handleProfileComplete = () => {
    setShowProfile(false);
    setShowResidency(true);
  };

  const handleResidencyComplete = () => {
    setShowResidency(false);
    setShowAccount(true);
  };

  const handleAccountComplete = () => {
    setShowAccount(false);
    setShowTransaction(true);
  };

  const handleTransactionComplete = () => {
    setShowTransaction(false);
    setIsLoggedIn(true);
  };

  if (showProfile && userEmail) {
    return <UserProfile email={userEmail} onProfileComplete={handleProfileComplete} />;
  }

  if (showResidency && userEmail) {
    return <ResidencyForm email={userEmail} onResidencyComplete={handleResidencyComplete} />;
  }

  if (showAccount && userEmail) {
    return <AccountForm email={userEmail} onAccountComplete={handleAccountComplete} />;
  }

  if (showTransaction && userEmail) {
    return <TransactionForm email={userEmail} onTransactionComplete={handleTransactionComplete} />;
  }

  if (isLoggedIn) {
    return (
      <div style={{ textAlign: 'center', padding: '50px', minHeight: '100vh' }}>
        <h1>Welcome Back!</h1>
        <p>You have successfully logged in to Overseas Mitra.</p>
        <button onClick={() => {
          setIsLoggedIn(false);
          setUserEmail(null);
          sessionStorage.removeItem('userEmail');
        }} style={{ marginTop: '20px', padding: '10px 20px' }}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Header onLoginSuccess={handleLoginSuccess} />
      <Hero />
      <TransferForm />
      <Features />
      <Footer />
    </div>
  );
}

export default App;