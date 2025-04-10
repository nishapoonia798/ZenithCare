import React from 'react';
import './Header.css';
import logo from './ZenithCareLogo.png';
import Navbar from './Navbar'; // Make sure your logo is in this path

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="ZenithCare logo" className="logo" />
        <h1 className="title">Welcome to ZenithCare</h1>
      </div>
      <div className="header-right">
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
