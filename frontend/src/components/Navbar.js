import React, {useState, useEffect} from 'react';
import './Navbar.css';
import '../pages/Home';
import '../pages/Appointments';
import '../pages/Contact';
import Search from './Search';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <nav className="navbar">
            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
              <li> <a href="../pages/Home.js">Home</a></li>
              <li> <a href="../pages/Appointment.js">Book Appointment</a> </li>
              <li> <a href="../pages/Contact.js">Contact</a></li>
              <li> <Search/> </li>
              <li> <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? '☀️' : '🌙'}
            </button> </li> 
              <li> <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button> </li> 
            </ul>
        </nav>
    );
};

export default Navbar;
