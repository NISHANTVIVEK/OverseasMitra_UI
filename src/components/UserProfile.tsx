import React, { useState } from 'react';
import './AuthModal.css';

interface UserProfileProps {
  email: string;
  onProfileComplete: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ email, onProfileComplete }) => {
  const [formData, setFormData] = useState({
    indiaTaxId: '',
    foreignTaxId: '',
    defaultResidencyStatus: 'NRI',
    homeCountry: 'INDIA',
    baseCurrency: 'INR',
    trcFlag: 'false',
    form10fFlag: 'false',
    subjectToTaxFlag: 'false',
    assessmentYear: '',
    subjectToTaxConfirmed: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/UserData/profile', {
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
        onProfileComplete();
      } else {
        alert('Failed to save profile. Please try again.');
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
        <h2>Complete Your Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>India Tax ID</label>
            <input
              type="text"
              value={formData.indiaTaxId}
              onChange={(e) => setFormData({...formData, indiaTaxId: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Foreign Tax ID</label>
            <input
              type="text"
              value={formData.foreignTaxId}
              onChange={(e) => setFormData({...formData, foreignTaxId: e.target.value})}
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Residency Status</label>
              <select
                value={formData.defaultResidencyStatus}
                onChange={(e) => setFormData({...formData, defaultResidencyStatus: e.target.value})}
                style={{ width: '100%', padding: '12px 16px', border: '2px solid #e0e0e0', borderRadius: '8px' }}
              >
                <option value="NRI">NRI</option>
                <option value="Resident">Resident</option>
              </select>
            </div>
            <div className="form-group">
              <label>Home Country</label>
              <input
                type="text"
                value={formData.homeCountry}
                onChange={(e) => setFormData({...formData, homeCountry: e.target.value})}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Base Currency</label>
              <input
                type="text"
                value={formData.baseCurrency}
                onChange={(e) => setFormData({...formData, baseCurrency: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>Assessment Year</label>
              <input
                type="text"
                value={formData.assessmentYear}
                onChange={(e) => setFormData({...formData, assessmentYear: e.target.value})}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={formData.subjectToTaxConfirmed}
                onChange={(e) => setFormData({...formData, subjectToTaxConfirmed: e.target.checked})}
                style={{ marginRight: '8px' }}
              />
              Subject to Tax Confirmed
            </label>
          </div>
          <button type="submit" className="btn btn-primary auth-btn">Next</button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;