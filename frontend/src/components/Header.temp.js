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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="left-section">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="ZenithCare logo" className="logo" />
        </Link>
        <nav>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/appointments" onClick={closeMenu}>Book Appointment</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
            <li className="search-bar"><Search /></li>
          </ul>
        </nav>
      </div>

      <div className="right-section">
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
        <Link to="/login" className="login-button" onClick={closeMenu}>Login</Link>
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
      </div>
    </header>
  );
}

export default Header;
