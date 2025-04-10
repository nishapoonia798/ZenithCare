import React from 'react';
import './Footer.css';
import logo from './ZenithCareLogo.png';

function Header() {
  return (
    <header>
      <div className="header">
        <div className="header-left">
          <img src="./ZenithCareLogo" alt="ZenithCare logo" />
          <h1 className="title">Welcome to ZenithCare</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;