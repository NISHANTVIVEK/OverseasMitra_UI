import React, { useState, useEffect } from 'react';

const ProjectXLanding = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-blue-900 to-violet-800 backdrop-blur-lg shadow-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Project-X
          </div>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-blue-200 transition-colors px-4 py-2 rounded-full hover:bg-white/10">
              Home
            </button>
            <button onClick={() => scrollToSection('features')} className="text-white hover:text-blue-200 transition-colors px-4 py-2 rounded-full hover:bg-white/10">
              Features
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-white hover:text-blue-200 transition-colors px-4 py-2 rounded-full hover:bg-white/10">
              Pricing
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-blue-200 transition-colors px-4 py-2 rounded-full hover:bg-white/10">
              Contact
            </button>
          </nav>
          <div className="flex space-x-4">
            <button className="px-6 py-2 border-2 border-white/80 text-white rounded-full hover:bg-white hover:text-blue-900 transition-all transform hover:-translate-y-1">
              Login
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-amber-500 to-red-500 text-white rounded-full hover:shadow-lg transition-all transform hover:-translate-y-1">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-900 to-violet-800 text-white pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[length:60px_60px] animate-pulse"></div>
        
        <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent animate-fade-in">
            Cross-Currency Wealth Clarity for NRIs in Europe
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto opacity-95">
            One app that lets every Indian see, grow & prove their true return – after FX, taxes and treaties.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-5xl font-bold text-amber-400 mb-2">€135bn</div>
              <div className="text-lg opacity-90">sent to India in 2024</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-5xl font-bold text-amber-400 mb-2">+34%</div>
              <div className="text-lg opacity-90">growth in new NRI folios</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all hover:-translate-y-2 hover:shadow-2xl">
              <div className="text-5xl font-bold text-amber-400 mb-2">0</div>
              <div className="text-lg opacity-90">tools linking rupees back to multi-currency profit</div>
            </div>
          </div>
          
          <button className="bg-gradient-to-r from-amber-500 to-red-500 text-white px-12 py-4 text-xl font-bold rounded-full hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 uppercase tracking-wider">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-center mb-4 relative">
            Hidden Frictions We Solve
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-500 to-red-500 rounded mt-4"></div>
          </h2>
          <p className="text-xl text-center mb-16 text-white/80 max-w-2xl mx-auto">
            The challenges every NRI faces but no one talks about
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2">
              <div className="text-5xl mb-4">⚖️</div>
              <h3 className="text-2xl font-semibold mb-4 text-amber-400">Treaty Blind-Spots</h3>
              <p className="opacity-90 leading-relaxed">Many over-pay tax or skip credits entirely. Complex DTAA rules leave money on the table year after year.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-semibold mb-4 text-amber-400">Year-End Shock</h3>
              <p className="opacity-90 leading-relaxed">Decisions today, surprises months later. No real-time visibility into true returns after currency swings and taxes.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all hover:-translate-y-2">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-2xl font-semibold mb-4 text-amber-400">Compliance Anxiety</h3>
              <p className="opacity-90 leading-relaxed">Form 15CA/CB & split-year filings feel opaque. Hours spent with CAs, still unsure if it's right.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-center mb-4 text-slate-800 relative">
            Why Project-X Matters Now
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-900 to-violet-800 rounded mt-4"></div>
          </h2>
          <p className="text-xl text-center mb-16 text-slate-600 max-w-2xl mx-auto">
            The only platform built specifically for NRIs in Europe
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: "💱",
                title: "FX-Aware Euro Tracking",
                desc: "Only product matching every €-in to €-out across multiple residencies. See your true returns after currency fluctuations, not just rupee gains."
              },
              {
                icon: "🌍",
                title: "Multi-Country Support",
                desc: "Moving between European countries? Our split-year logic handles transitions seamlessly across France, Germany, Ireland and more."
              },
              {
                icon: "📋",
                title: "Auto-Generated Documents",
                desc: "One-click generation of 15CA/CB, Form 2047, German AUS, Irish Form 11. No more CA dependencies or filing delays."
              },
              {
                icon: "🔄",
                title: "Loss Harvest Alerts",
                desc: "Get timely alerts to harvest losses before country moves or year-end deadlines. Save thousands in taxes with smart timing."
              },
              {
                icon: "⚡",
                title: "Real-Time Tax Preview",
                desc: "See the tax impact of every trade before you make it. No more year-end surprises or panic sells."
              },
              {
                icon: "🎯",
                title: "Treaty Credit Automation",
                desc: "Automatically identifies and applies correct tax credits based on DTAA between India and your residence country."
              }
            ].map((feature, index) => (
              <div key={index} className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-4 border border-slate-200 hover:border-violet-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 to-violet-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-violet-800 rounded-3xl flex items-center justify-center text-3xl mb-6 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-800">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-gradient-to-b from-slate-50 to-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-center mb-4 text-slate-800 relative">
            Choose Your Plan
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-900 to-violet-800 rounded mt-4"></div>
          </h2>
          <p className="text-xl text-center mb-16 text-slate-600 max-w-2xl mx-auto">
            Start free, scale as your wealth grows
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Basic Plan */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="text-2xl font-bold mb-2">Basic Plan</div>
              <div className="text-6xl font-bold text-blue-900 mb-2">Free</div>
              <div className="text-blue-900 font-bold mb-6">Live Tracker</div>
              
              <ul className="space-y-4 mb-8">
                {["2 institutions (Bank/brokers/remitters)", "Live € ledger tracking", "Basic FX conversion", "Email support", "Mobile app access"].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 font-bold text-xl mr-3">✓</span>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-amber-500 to-red-500 text-white py-4 rounded-2xl font-semibold hover:shadow-lg transition-all mb-4">
                Get Started Free
              </button>
              <div className="text-sm text-slate-500 bg-slate-50 p-4 rounded-xl">
                Ideal for: First-time NRI investors
              </div>
            </div>

            {/* Standard Plan - Featured */}
            <div className="bg-gradient-to-br from-blue-900 to-violet-800 text-white rounded-3xl p-8 shadow-2xl transform scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                Most Popular
              </div>
              
              <div className="text-2xl font-bold mb-2">Standard Plan</div>
              <div className="text-6xl font-bold mb-2">€7<span className="text-xl font-normal">/mo</span></div>
              <div className="text-amber-400 font-bold mb-6">Smart Compliance</div>
              
              <ul className="space-y-4 mb-8">
                {["Unlimited institution links", "Scenario planner & tax optimization alerts", "Loss-harvest advisor", "Real-time treaty credit calculations", "Priority support & onboarding", "All Basic Plan features"].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-400 font-bold text-xl mr-3">✓</span>
                    <span className="text-white/95">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-amber-500 to-red-500 text-white py-4 rounded-2xl font-semibold hover:shadow-lg transition-all mb-4">
                Start Free Trial
              </button>
              <div className="text-sm text-white/80 bg-white/10 p-4 rounded-xl">
                Ideal for: Regular investors with €10k+ portfolio
              </div>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
              <div className="text-2xl font-bold mb-2">Premium Plan</div>
              <div className="text-6xl font-bold text-blue-900 mb-2">€15<span className="text-xl text-slate-500">/mo</span></div>
              <div className="text-blue-900 font-bold mb-6">Auto-Filer</div>
              
              <ul className="space-y-4 mb-8">
                {["One-click document generation (15CA/CB, 2047, AUS)", "Embedded transfer capabilities", "Advanced multi-country tax optimization", "White-glove support & tax consultation", "API access for custom integrations", "All Standard Plan features"].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 font-bold text-xl mr-3">✓</span>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-amber-500 to-red-500 text-white py-4 rounded-2xl font-semibold hover:shadow-lg transition-all mb-4">
                Start Free Trial
              </button>
              <div className="text-sm text-slate-500 bg-slate-50 p-4 rounded-xl">
                Ideal for: Power users with €50k+ portfolio
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-200 py-20 text-center">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-slate-800 mb-6">Ready to See Your True Returns?</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
            Join hundreds of NRIs who've discovered what their investments are really worth in their home currency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-amber-500 to-red-500 text-white px-12 py-4 text-xl font-bold rounded-full hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-12 py-4 border-2 border-blue-900 text-blue-900 rounded-full text-xl font-semibold hover:bg-blue-900 hover:text-white transition-all">
              Book a Demo
            </button>
          </div>
          
          <p className="mt-8 text-slate-500">✓ No credit card required ✓ Setup in 5 minutes ✓ Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-br from-slate-800 to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-5 gap-12 mb-12">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold text-amber-400 mb-6">Project-X</h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Cross-currency wealth clarity for NRIs in Europe. Track, optimize, and repatriate with confidence.
              </p>
              <div className="flex space-x-4">
                {["📧", "💬", "🐦"].map((icon, index) => (
                  <div key={index} className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-xl hover:bg-amber-500 transition-all cursor-pointer">
                    {icon}
                  </div>
                ))}
              </div>
            </div>
            
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "API Documentation", "Mobile App", "Security", "Roadmap"]
              },
              {
                title: "For NRIs",
                links: ["Tax Guide - France", "Tax Guide - Germany", "Tax Guide - Ireland", "DTAA Calculator", "Loss Harvesting Guide", "Repatriation Rules"]
              },
              {
                title: "Support",
                links: ["Help Center", "Live Chat", "Video Tutorials", "Webinars", "Community Forum", "Contact Us"]
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Press Kit", "Privacy Policy", "Terms of Service", "GDPR Compliance"]
              }
            ].map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-amber-400 mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-slate-300 hover:text-white transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400">© 2025 Project-X. All rights reserved. Made with ❤️ for NRIs in Europe.</p>
            <div className="flex space-x-8 text-sm text-slate-400 mt-4 md:mt-0">
              <span>🇫🇷 France</span>
              <span>🇩🇪 Germany</span>
              <span>🇮🇪 Ireland</span>
              <span>🇳🇱 Netherlands</span>
              <span>🇪🇸 Spain</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-16 h-16 bg-gradient-to-r from-amber-500 to-red-500 rounded-full flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition-all">
          🚀
        </button>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 w-14 h-14 bg-blue-900/80 backdrop-blur-lg rounded-full flex items-center justify-center text-white shadow-xl hover:bg-blue-800 transition-all"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ProjectXLanding;