import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <nav className="navbar">
          <div className="navbar-left">
            <img src={logo} alt="ZenithCare" className="logo-img" />
            <h1>ZenithCare</h1>
          </div>
    
          <div className="navbar-right">
            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/appointments">Appointments</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
    
            <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? '☀️' : '🌙'}
            </button>
    
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </button>
          </div>
        </nav>
    );
};

export default Navbar;
