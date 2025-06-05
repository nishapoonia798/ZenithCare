import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true');
  const [userRole, setUserRole] = useState(() => localStorage.getItem('userRole') || null);

  const login = (role) => {
    setIsLoggedIn(true);
    setUserRole(role);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userRole', role);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
  };

  const clearAuth = () => {
    setIsLoggedIn(false);
    setUserRole(null);
  };

  useEffect(() => {
    // Check authentication status on mount
    const storedLoginStatus = localStorage.getItem('isLoggedIn') === 'true';
    const storedRole = localStorage.getItem('userRole');

    if (storedLoginStatus && storedRole) {
      setIsLoggedIn(true);
      setUserRole(storedRole);
    } else {
      // Clear any inconsistent state
      setIsLoggedIn(false);
      setUserRole(null);
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userRole');
      localStorage.removeItem('userEmail');
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, userRole, login, logout, clearAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);