import React from 'react';
import './Features.css';

const Features: React.FC = () => {
  const features = [
    {
      icon: '💰',
      title: 'Fair and transparent pricing',
      description: 'No hidden fees. No surprises. Just the real exchange rate.'
    },
    {
      icon: '⚡',
      title: 'Lightning fast transfers',
      description: 'Most transfers arrive within minutes or hours.'
    },
    {
      icon: '🔒',
      title: 'Secure and regulated',
      description: 'Your money is protected by bank-level security.'
    },
    {
      icon: '📱',
      title: 'Easy to use',
      description: 'Send money with just a few taps on your phone.'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <h2>Why choose Overseas Mitra?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;