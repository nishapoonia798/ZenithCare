import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Optional CSS for styling

function Header() {
  return (
    <header>
      <h2>ZenithCare</h2>
      <nav>
        <Link to="/">Home</Link> | <Link to="/appointments">Appointments</Link> | <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
