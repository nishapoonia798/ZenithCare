import React, {useState, useEffect} from 'react';
import './Navbar.css';
import '../pages/Home';
import '../pages/Appointments';
import '../pages/Contact';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <nav className="navbar">
          <div className="navbar-left">
            <h1>ZenithCare</h1>
          </div>
    
          <div className="navbar-right">
            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
              <li> <a href="../pages/Home.js">Home</a></li>
              <li> <a href="../pages/Appointment.js">Book Appointment</a> </li>
              <li> <a href="../pages/Contact.js">Contact</a></li>
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
