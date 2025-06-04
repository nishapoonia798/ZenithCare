import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/ZenithCareLogo.png'; // 
//import UserLogin from './UserLogin';
import Search from './Search';
import './Header.css';

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
      }, [darkMode]);

  return (
    <header className="header">
      <div className="left-section">
        <img src={logo} alt="ZenithCare logo" className="logo" />
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link  to="/">Home</Link></li>
          <li><Link to="/appointment">Book Appointment</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li className="search-bar"><Search /></li>
        </ul>
      </div>

      <div className="right-section">
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️' : '🌙'}
        </button>
        <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          {/* ☰ */}
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <Link to="/login">Login</Link>
      </div>
    </header>
  );
}

export default Header;
