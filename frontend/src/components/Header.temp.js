import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/ZenithCareLogo.png'; // 
//import UserLogin from './UserLogin';
import Search from './Search';
import './Header.css';

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = {
    'About Us': [
      'Overview',
      'Our Team',
      'Infrastructure',
      'Awards & Accreditations'
    ],
    'Diagnostics': [
      'Audiology & Speech Therapy',
      'Cardiology',
      'Endoscopy',
      'Pathology',
      'Pulmonary Function Test (PFT)',
      'Imaging-Sciences'
    ],
    'Specialties': [
      'Emergency & Trauma',
      'Cardiac Sciences',
      'Neuro Sciences',
      'Pulmonology',
      'Endoscopy',
      'Ophthalmology',
      'Pathology'
    ],
    'Super Specialities': [
      'Cardiology',
      'Neurology',
      'Oncology',
      'Orthopedics',
      'Urology'
    ],
    'Patient Guide': [
      'Admission Process',
      'Discharge Process',
      'Insurance & TPA',
      'Patient Rights',
      'Visitor Guidelines'
    ],
    'Academics & Research': [
      'Medical Education',
      'Research Publications',
      'Clinical Trials',
      'Training Programs'
    ]
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="contact-info">
            <span>📦 24 HOUR BLOOD BANK SERVICE</span>
            <span>🚑 For Emergency: +1 (555) 123-4567</span>
            <span>📞 For Appointment: +1 (555) 987-6543</span>
          </div>
          <button className="find-doctor-btn">FIND A DOCTOR</button>
        </div>
      </div>

      <div className="main-header">
        <div className="header-content">
          <Link to="/" className="logo-container">
            <img src={logo} alt="ZenithCare Logo" className="logo" />
            <div className="logo-content">
              <h1 className="logo-title">ZenithCare</h1>
              <p className="logo-tagline">
                <span>Healthy People,</span>
                <span>Healthy Planet</span>
              </p>
            </div>
          </Link>

          <nav className="main-nav">
            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
              {Object.entries(navItems).map(([category, items]) => (
                <li key={category} className="nav-item">
                  <Link to={`/${category.toLowerCase().replace(/\s+/g, '-')}`}>
                    {category}
                  </Link>
                  <div className="dropdown-menu">
                    <ul>
                      {items.map((item, index) => (
                        <li key={index}>
                          <Link to={`/${category.toLowerCase().replace(/\s+/g, '-')}/${item.toLowerCase().replace(/\s+/g, '-')}`}>
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          <div className="right-section">
            <button
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <Link to="/login" className="login-button">Login</Link>
            <button
              className={`hamburger ${menuOpen ? 'active' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
