import React, { useState } from 'react';
import './TransferForm.css';

const TransferForm: React.FC = () => {
  const [sendAmount, setSendAmount] = useState('1000');
  const [receiveAmount, setReceiveAmount] = useState('12.34');

  return (
    <section className="transfer-form-section">
      <div className="container">
        <div className="form-container">
          <h2>Send money internationally</h2>
          <div className="transfer-form">
            <div className="form-row">
              <div className="form-group">
                <label>You send</label>
                <div className="input-group">
                  <input 
                    type="text" 
                    value={sendAmount}
                    onChange={(e) => setSendAmount(e.target.value)}
                  />
                  <select>
                    <option>INR</option>
                    <option>USD</option>
                    <option>EUR</option>
                  </select>
                </div>
              </div>
              <div className="exchange-icon">⇄</div>
              <div className="form-group">
                <label>Recipient gets</label>
                <div className="input-group">
                  <input 
                    type="text" 
                    value={receiveAmount}
                    onChange={(e) => setReceiveAmount(e.target.value)}
                  />
                  <select>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>GBP</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="rate-info">
              <span>1 INR = 0.01234 USD</span>
              <span className="fee-info">Low cost transfer fee: ₹99</span>
            </div>
            <button className="btn btn-primary transfer-btn">
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransferForm;