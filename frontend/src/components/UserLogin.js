import React, { useEffect, useState }  from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './UserLogin.css';
import '../pages/PatientInfoPage';
import { Navigate } from 'react-router-dom';
const UserLogin = () => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    useEffect(() => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
    }, []);
    const handleClick = () => {
      if(isLoggedIn){
        window.location.href = "/PatientInfoPage";
      }else {
        window.location.href = "/auth";
      }
    }
    
    const handleLogout = () => {
      setIsLoggedIn(false);
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
      window.location.href = "/login";
    };
  return (
    <div className="user-login">
    <FaUserCircle className="user-icon" onClick={handleClick} />
    {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default UserLogin;
