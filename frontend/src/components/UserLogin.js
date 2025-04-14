import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './UserLogin.css';

const UserLogin = () => {
  return (
    <div className="user-login">
      <Link to="/login" title="Login">
        <FaUserCircle className="user-icon" />
      </Link>
    </div>
  );
};

export default UserLogin;
