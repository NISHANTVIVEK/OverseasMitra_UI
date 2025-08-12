import React, { useState } from 'react';

// Simple SVG icons as React components
const ChevronRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const Calculator = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="8" y1="6" x2="16" y2="6" />
    <line x1="16" y1="10" x2="16" y2="10" />
    <line x1="12" y1="10" x2="12" y2="10" />
    <line x1="8" y1="10" x2="8" y2="10" />
    <line x1="16" y1="14" x2="16" y2="14" />
    <line x1="12" y1="14" x2="12" y2="14" />
    <line x1="8" y1="14" x2="8" y2="14" />
    <line x1="16" y1="18" x2="16" y2="18" />
    <line x1="12" y1="18" x2="12" y2="18" />
    <line x1="8" y1="18" x2="8" y2="18" />
  </svg>
);

const FileText = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14,2 14,8 20,8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10,9 9,9 8,9" />
  </svg>
);

const Shield = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const Users = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const TrendingUp = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const CheckCircle = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const Menu = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const X = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ClearTaxApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stats = [
    { value: '2M+', label: 'Tax Returns Filed' },
    { value: '50K+', label: 'Businesses' },
    { value: '₹500Cr+', label: 'Tax Savings' },
    { value: '99.9%', label: 'Accuracy' }
  ];

  const services = [
    {
      icon: <FileText style={{ width: '32px', height: '32px' }} />,
      title: 'ITR Filing',
      description: 'Expert assistance for all types of income tax returns',
      features: ['Salaried individuals', 'Self-employed', 'Capital gains', 'NRI filing']
    },
    {
      icon: <Calculator style={{ width: '32px', height: '32px' }} />,
      title: 'GST Solutions',
      description: '10x faster GST filing and reconciliation',
      features: ['Auto-reconciliation', 'E-invoice generation', 'ITC optimization', 'Compliance alerts']
    },
    {
      icon: <Users style={{ width: '32px', height: '32px' }} />,
      title: 'Business Services',
      description: 'Complete business compliance solutions',
      features: ['Company registration', 'Legal documentation', 'Trademark filing', 'Digital signatures']
    }
  ];

  const features = [
    {
      icon: <TrendingUp style={{ width: '24px', height: '24px' }} />,
      title: 'Maximum Savings',
      description: 'Save up to ₹86,500 on your tax returns'
    },
    {
      icon: <Shield style={{ width: '24px', height: '24px' }} />,
      title: 'Secure & Compliant',
      description: 'SOC 2 compliant with 128-bit SSL encryption'
    },
    {
      icon: <CheckCircle style={{ width: '24px', height: '24px' }} />,
      title: 'Expert Reviewed',
      description: '60+ in-house tax experts ensuring accuracy'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', fontFamily: 'system-ui, sans-serif' }}>
      {/* Header */}
      <header style={{ 
        backgroundColor: 'white', 
        borderBottom: '1px solid #e5e7eb', 
        position: 'sticky', 
        top: 0, 
        zIndex: 50 
      }}>
        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '0 16px' 
        }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            height: '64px' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ 
                width: '32px', 
                height: '32px', 
                background: 'linear-gradient(to right, #2563eb, #9333ea)', 
                borderRadius: '8px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>CT</span>
              </div>
              <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827' }}>ClearTax</span>
            </div>
            
            <nav style={{ 
              display: 'none', 
              gap: '32px',
              '@media (min-width: 768px)': { display: 'flex' }
            }}>
              <a href="#" style={{ 
                color: '#374151', 
                textDecoration: 'none', 
                transition: 'color 0.3s'
              }}>For You</a>
              <a href="#" style={{ 
                color: '#374151', 
                textDecoration: 'none', 
                transition: 'color 0.3s'
              }}>For Business</a>
              <a href="#" style={{ 
                color: '#374151', 
                textDecoration: 'none', 
                transition: 'color 0.3s'
              }}>Products</a>
              <a href="#" style={{ 
                color: '#374151', 
                textDecoration: 'none', 
                transition: 'color 0.3s'
              }}>Support</a>
            </nav>

            <div style={{ 
              display: 'none', 
              alignItems: 'center', 
              gap: '16px',
              '@media (min-width: 768px)': { display: 'flex' }
            }}>
              <button style={{ 
                color: '#374151', 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer',
                transition: 'color 0.3s'
              }}>Login</button>
              <button style={{ 
                backgroundColor: '#2563eb', 
                color: 'white', 
                padding: '8px 16px', 
                borderRadius: '8px', 
                border: 'none', 
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}>
                Get Started
              </button>
            </div>

            <button 
              style={{ 
                display: 'block', 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer',
                '@media (min-width: 768px)': { display: 'none' }
              }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X style={{ width: '24px', height: '24px' }} /> : <Menu style={{ width: '24px', height: '24px' }} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div style={{ 
            backgroundColor: 'white', 
            borderTop: '1px solid #e5e7eb',
            '@media (min-width: 768px)': { display: 'none' }
          }}>
            <div style={{ padding: '8px 16px' }}>
              <a href="#" style={{ 
                display: 'block', 
                padding: '8px 0', 
                color: '#374151', 
                textDecoration: 'none' 
              }}>For You</a>
              <a href="#" style={{ 
                display: 'block', 
                padding: '8px 0', 
                color: '#374151', 
                textDecoration: 'none' 
              }}>For Business</a>
              <a href="#" style={{ 
                display: 'block', 
                padding: '8px 0', 
                color: '#374151', 
                textDecoration: 'none' 
              }}>Products</a>
              <a href="#" style={{ 
                display: 'block', 
                padding: '8px 0', 
                color: '#374151', 
                textDecoration: 'none' 
              }}>Support</a>
              <div style={{ paddingTop: '8px', borderTop: '1px solid #e5e7eb' }}>
                <button style={{ 
                  display: 'block', 
                  width: '100%', 
                  textAlign: 'left', 
                  padding: '8px 0', 
                  color: '#374151',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer'
                }}>Login</button>
                <button style={{ 
                  display: 'block', 
                  width: '100%', 
                  backgroundColor: '#2563eb', 
                  color: 'white', 
                  padding: '8px', 
                  borderRadius: '8px', 
                  marginTop: '8px',
                  border: 'none',
                  cursor: 'pointer'
                }}>
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #faf5ff 100%)', 
        padding: '80px 0' 
      }}>
        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '0 16px' 
        }}>
          <div style={{ 
            textAlign: 'center', 
            maxWidth: '896px', 
            margin: '0 auto' 
          }}>
            <h1 style={{ 
              fontSize: '48px', 
              fontWeight: 'bold', 
              color: '#111827', 
              marginBottom: '24px', 
              lineHeight: '1.1',
              '@media (max-width: 768px)': { fontSize: '32px' }
            }}>
              The most seamless and accurate{' '}
              <span style={{ 
                background: 'linear-gradient(to right, #2563eb, #9333ea)', 
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent' 
              }}>
                tax filing experience
              </span>{' '}
              powered by AI
            </h1>
            <p style={{ 
              fontSize: '20px', 
              color: '#4b5563', 
              marginBottom: '32px', 
              maxWidth: '512px', 
              margin: '0 auto 32px auto' 
            }}>
              Get started with the most seamless ITR filing experience for every tax situation, 
              no matter how complex. Filed by India's top tax experts.
            </p>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '16px', 
              justifyContent: 'center',
              '@media (min-width: 640px)': { flexDirection: 'row' }
            }}>
              <button style={{ 
                backgroundColor: '#2563eb', 
                color: 'white', 
                padding: '16px 32px', 
                borderRadius: '8px', 
                fontSize: '18px', 
                fontWeight: '500', 
                border: 'none', 
                cursor: 'pointer',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                <span>Start Filing ITR</span>
                <ChevronRight style={{ width: '20px', height: '20px' }} />
              </button>
              <button style={{ 
                border: '2px solid #2563eb', 
                color: '#2563eb', 
                backgroundColor: 'transparent',
                padding: '16px 32px', 
                borderRadius: '8px', 
                fontSize: '18px', 
                fontWeight: '500', 
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}>
                Talk to Expert
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '64px 0', backgroundColor: 'white' }}>
        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '0 16px' 
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '32px',
            '@media (min-width: 768px)': { gridTemplateColumns: 'repeat(4, 1fr)' }
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '36px', 
                  fontWeight: 'bold', 
                  color: '#2563eb', 
                  marginBottom: '8px',
                  '@media (min-width: 768px)': { fontSize: '48px' }
                }}>
                  {stat.value}
                </div>
                <div style={{ color: '#4b5563' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#f9fafb' }}>
        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '0 16px' 
        }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ 
              fontSize: '36px', 
              fontWeight: 'bold', 
              color: '#111827', 
              marginBottom: '16px',
              '@media (min-width: 768px)': { fontSize: '48px' }
            }}>
              Complete Tax & Compliance Solutions
            </h2>
            <p style={{ 
              fontSize: '20px', 
              color: '#4b5563', 
              maxWidth: '512px', 
              margin: '0 auto' 
            }}>
              From individual tax filing to business compliance, we've got you covered
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gap: '32px',
            '@media (min-width: 768px)': { gridTemplateColumns: 'repeat(3, 1fr)' }
          }}>
            {services.map((service, index) => (
              <div key={index} style={{ 
                backgroundColor: 'white', 
                borderRadius: '12px', 
                padding: '32px', 
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                transition: 'box-shadow 0.3s'
              }}>
                <div style={{ color: '#2563eb', marginBottom: '16px' }}>
                  {service.icon}
                </div>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: 'bold', 
                  color: '#111827', 
                  marginBottom: '12px' 
                }}>
                  {service.title}
                </h3>
                <p style={{ 
                  color: '#4b5563', 
                  marginBottom: '24px' 
                }}>
                  {service.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      fontSize: '14px', 
                      color: '#4b5563',
                      marginBottom: '8px'
                    }}>
                      <CheckCircle style={{ 
                        width: '16px', 
                        height: '16px', 
                        color: '#10b981', 
                        marginRight: '8px',
                        flexShrink: 0
                      }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button style={{ 
                  marginTop: '24px', 
                  color: '#2563eb', 
                  fontWeight: '500', 
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'color 0.3s',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  Learn More <ChevronRight style={{ width: '16px', height: '16px', marginLeft: '4px' }} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '80px 0', backgroundColor: 'white' }}>
        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '0 16px' 
        }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ 
              fontSize: '36px', 
              fontWeight: 'bold', 
              color: '#111827', 
              marginBottom: '16px',
              '@media (min-width: 768px)': { fontSize: '48px' }
            }}>
              Why Choose ClearTax?
            </h2>
            <p style={{ 
              fontSize: '20px', 
              color: '#4b5563' 
            }}>
              Built for scale, made by experts and secure by design
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gap: '32px',
            '@media (min-width: 768px)': { gridTemplateColumns: 'repeat(3, 1fr)' }
          }}>
            {features.map((feature, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  width: '64px', 
                  height: '64px', 
                  backgroundColor: '#dbeafe', 
                  borderRadius: '50%', 
                  marginBottom: '24px' 
                }}>
                  <div style={{ color: '#2563eb' }}>
                    {feature.icon}
                  </div>
                </div>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontWeight: 'bold', 
                  color: '#111827', 
                  marginBottom: '12px' 
                }}>
                  {feature.title}
                </h3>
                <p style={{ color: '#4b5563' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: '80px 0', 
        background: 'linear-gradient(to right, #2563eb, #9333ea)' 
      }}>
        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '0 16px', 
          textAlign: 'center' 
        }}>
          <h2 style={{ 
            fontSize: '36px', 
            fontWeight: 'bold', 
            color: 'white', 
            marginBottom: '16px',
            '@media (min-width: 768px)': { fontSize: '48px' }
          }}>
            Ready to file your taxes?
          </h2>
          <p style={{ 
            fontSize: '20px', 
            color: '#bfdbfe', 
            marginBottom: '32px', 
            maxWidth: '512px', 
            margin: '0 auto 32px auto' 
          }}>
            Join millions of satisfied customers and get your ITR filed in under 3 minutes
          </p>
          <button style={{ 
            backgroundColor: 'white', 
            color: '#2563eb', 
            padding: '16px 32px', 
            borderRadius: '8px', 
            fontSize: '18px', 
            fontWeight: '500', 
            border: 'none', 
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}>
            Start Your Tax Filing Journey
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#111827', color: 'white', padding: '48px 0' }}>
        <div style={{ 
          maxWidth: '1280px', 
          margin: '0 auto', 
          padding: '0 16px' 
        }}>
          <div style={{ 
            display: 'grid', 
            gap: '32px',
            '@media (min-width: 768px)': { gridTemplateColumns: 'repeat(4, 1fr)' }
          }}>
            <div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                marginBottom: '16px' 
              }}>
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  background: 'linear-gradient(to right, #2563eb, #9333ea)', 
                  borderRadius: '8px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <span style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>CT</span>
                </div>
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>ClearTax</span>
              </div>
              <p style={{ color: '#9ca3af' }}>
                India's most trusted tax filing platform
              </p>
            </div>
            
            <div>
              <h4 style={{ fontWeight: 'bold', marginBottom: '16px' }}>For You</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#" style={{ 
                    color: '#9ca3af', 
                    textDecoration: 'none',
                    transition: 'color 0.3s'
                  }}>ITR Filing</a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#" style={{ 
                    color: '#9ca3af', 
                    textDecoration: 'none',
                    transition: 'color 0.3s'
                  }}>Tax Calculator</a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#" style={{ 
                    color: '#9ca3af', 
                    textDecoration: 'none',
                    transition: 'color 0.3s'
                  }}>Investment</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ fontWeight: 'bold', marginBottom: '16px' }}>For Business</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#" style={{ 
                    color: '#9ca3af', 
                    textDecoration: 'none',
                    transition: 'color 0.3s'
                  }}>GST Filing</a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#" style={{ 
                    color: '#9ca3af', 
                    textDecoration: 'none',
                    transition: 'color 0.3s'
                  }}>Compliance</a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#" style={{ 
                    color: '#9ca3af', 
                    textDecoration: 'none',
                    transition: 'color 0.3s'
                  }}>Registration</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 style={{ fontWeight: 'bold', marginBottom: '16px' }}>Support</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#" style={{ 
                    color: '#9ca3af', 
                    textDecoration: 'none',
                    transition: 'color 0.3s'
                  }}>Help Center</a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#" style={{ 
                    color: '#9ca3af', 
                    textDecoration: 'none',
                    transition: 'color 0.3s'
                  }}>Contact Us</a>
                </li>
                <li style={{ marginBottom: '8px' }}>
                  <a href="#" style={{ 
                    color: '#9ca3af', 
                    textDecoration: 'none',
                    transition: 'color 0.3s'
                  }}>Blog</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div style={{ 
            borderTop: '1px solid #374151', 
            marginTop: '32px', 
            paddingTop: '32px', 
            textAlign: 'center', 
            color: '#9ca3af' 
          }}>
            <p>&copy; 2025 ClearTax. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ClearTaxApp;