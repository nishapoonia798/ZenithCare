import React, {useState, useEffect} from 'react';
import logo from './ZenithCareLogo.png';
import UserLogin from './UserLogin';
import Search from './Search';
import './Header.css';
import Navbar from './Navbar';

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
          <li><a href="../pages/Home.js">Home</a></li>
          <li><a href="../pages/Appointment.js">Book Appointment</a></li>
          <li><a href="../pages/Contact.js">Contact</a></li>
          <li className="search-bar"><Search /></li>
        </ul>
      </div>

      <div className="right-section">
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️' : '🌙'}
        </button>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <Navbar/>
        <UserLogin />
      </div>
    </header>
  );
}

export default Header;
