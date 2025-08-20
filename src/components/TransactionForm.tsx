import React, { useState } from 'react';
import './AuthModal.css';

interface TransactionFormProps {
  email: string;
  onTransactionComplete: () => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ email, onTransactionComplete }) => {
  const [formData, setFormData] = useState({
    tradeId: '',
    date: '',
    security: '',
    side: '',
    quantity: 0,
    price: 0,
    turnoverInr: 0,
    exchange: '',
    broker: '',
    accountType: '',
    segment: '',
    orderId: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/UserData/transaction', {
        method: 'POST',
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          ...formData,
          date: new Date(formData.date).toISOString()
        })
      });
      
      if (response.ok) {
        onTransactionComplete();
      } else {
        alert('Failed to save transaction data. Please try again.');
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
        <h2>Transaction Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Trade ID</label>
              <input
                type="text"
                value={formData.tradeId}
                onChange={(e) => setFormData({...formData, tradeId: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
                type="datetime-local"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Security</label>
              <input
                type="text"
                value={formData.security}
                onChange={(e) => setFormData({...formData, security: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Side</label>
              <input
                type="text"
                value={formData.side}
                onChange={(e) => setFormData({...formData, side: e.target.value})}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Quantity</label>
              <input
                type="number"
                value={formData.quantity}
                onChange={(e) => setFormData({...formData, quantity: parseInt(e.target.value)})}
                required
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value)})}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Turnover INR</label>
            <input
              type="number"
              step="0.01"
              value={formData.turnoverInr}
              onChange={(e) => setFormData({...formData, turnoverInr: parseFloat(e.target.value)})}
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Exchange</label>
              <input
                type="text"
                value={formData.exchange}
                onChange={(e) => setFormData({...formData, exchange: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Broker</label>
              <input
                type="text"
                value={formData.broker}
                onChange={(e) => setFormData({...formData, broker: e.target.value})}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Account Type</label>
              <input
                type="text"
                value={formData.accountType}
                onChange={(e) => setFormData({...formData, accountType: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Segment</label>
              <input
                type="text"
                value={formData.segment}
                onChange={(e) => setFormData({...formData, segment: e.target.value})}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Order ID</label>
            <input
              type="text"
              value={formData.orderId}
              onChange={(e) => setFormData({...formData, orderId: e.target.value})}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary auth-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default TransactionForm;