import React, { useState } from 'react';
import './AuthModal.css';

interface ResidencyFormProps {
  email: string;
  onResidencyComplete: () => void;
}

const ResidencyForm: React.FC<ResidencyFormProps> = ({ email, onResidencyComplete }) => {
  const [formData, setFormData] = useState({
    startDate: '',
    endDate: '',
    status: 'NRI',
    country: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/UserData/residency', {
        method: 'POST',
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          startDate: new Date(formData.startDate).toISOString(),
          endDate: new Date(formData.endDate).toISOString(),
          status: formData.status,
          country: formData.country
        })
      });
      
      if (response.ok) {
        onResidencyComplete();
      } else {
        alert('Failed to save residency data. Please try again.');
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
        <h2>Residency Information</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                required
              />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
                style={{ width: '100%', padding: '12px 16px', border: '2px solid #e0e0e0', borderRadius: '8px' }}
              >
                <option value="NRI">NRI</option>
                <option value="Resident">Resident</option>
              </select>
            </div>
            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                value={formData.country}
                onChange={(e) => setFormData({...formData, country: e.target.value})}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary auth-btn">Next</button>
        </form>
      </div>
    </div>
  );
};

export default ResidencyForm;