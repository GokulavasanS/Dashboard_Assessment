import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import Data from './Data-Security.png';
import Google from './google.png';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      setIsLoading(false);
      return;
    }

    try {
      // Simulating an API call
      const response = await new Promise((resolve) => 
        setTimeout(() => resolve({ success: true }), 1000)
      );

      if (response.success) {
        // Login successful
        navigate('/dashboard'); // Redirect to dashboard
      } else {
        setError('Invalid email or password.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // Implement Google OAuth login here
    console.log('Google login clicked');
  };

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <h1>Hey there!</h1>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="login-btn" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <button className="google-login-btn" onClick={handleGoogleLogin}>
          <img src={Google} alt="Google" /> Login with Google
        </button>
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
      <div className="login-info">
        <h2>Migrate Data like a breeze</h2>
        <p>High performance data pipelines built in a minute</p>
        <img src={Data} alt="Data Migration" />
      </div>
    </div>
  );
};

export default LoginPage;