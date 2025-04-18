import React, { useState } from 'react';
import './LoginInfo.css';

const LoginInfo = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loginStatus, setLoginStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login logic (replace with real authentication logic)
    if (formData.email === "test@example.com" && formData.password === "password") {
      setLoginStatus("Login successful!");
    } else {
      setLoginStatus("Invalid username or password.");
    }
  };

  return (
    <div className="login-info-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="login-status">
        {loginStatus && <p>{loginStatus}</p>}
      </div>
      <div className="registration-link">
        <p>Don't have an account? <a href="/register">Register here</a></p>
      </div>
    </div>
  );
};

export default LoginInfo;