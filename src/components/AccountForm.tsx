import React, { useState } from 'react';
import './AuthModal.css';

interface AccountFormProps {
  email: string;
  onAccountComplete: () => void;
}

const AccountForm: React.FC<AccountFormProps> = ({ email, onAccountComplete }) => {
  const [formData, setFormData] = useState({
    accountId: '',
    broker: '',
    accountType: '',
    tcsExemptionFlag: false,
    premiumPlanFlag: false,
    customBrokerageRate: 0
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/UserData/account', {
        method: 'POST',
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          ...formData
        })
      });
      
      if (response.ok) {
        onAccountComplete();
      } else {
        alert('Failed to save account data. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div className="modal-content" style={{ maxWidth: '600px', margin: 0 }}>
        <h2>Account Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Account ID</label>
            <input
              type="text"
              value={formData.accountId}
              onChange={(e) => setFormData({...formData, accountId: e.target.value})}
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Broker</label>
              <input
                type="text"
                value={formData.broker}
                onChange={(e) => setFormData({...formData, broker: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Account Type</label>
              <input
                type="text"
                value={formData.accountType}
                onChange={(e) => setFormData({...formData, accountType: e.target.value})}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Custom Brokerage Rate</label>
            <input
              type="number"
              step="0.01"
              value={formData.customBrokerageRate}
              onChange={(e) => setFormData({...formData, customBrokerageRate: parseFloat(e.target.value)})}
              required
            />
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={formData.tcsExemptionFlag}
                onChange={(e) => setFormData({...formData, tcsExemptionFlag: e.target.checked})}
                style={{ marginRight: '8px' }}
              />
              TCS Exemption Flag
            </label>
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={formData.premiumPlanFlag}
                onChange={(e) => setFormData({...formData, premiumPlanFlag: e.target.checked})}
                style={{ marginRight: '8px' }}
              />
              Premium Plan Flag
            </label>
          </div>
          <button type="submit" className="btn btn-primary auth-btn">Complete Setup</button>
        </form>
      </div>
    </div>
  );
};

export default AccountForm;