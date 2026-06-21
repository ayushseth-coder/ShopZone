import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { loginAsGuest, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    loginAsGuest();
    navigate('/checkout'); // Redirect to checkout after login
  };

  if (isAuthenticated) {
    return (
      <div className="login-container">
        <h2>You are already logged in!</h2>
        <button className="btn-primary" onClick={() => navigate('/checkout')}>
          Go to Checkout
        </button>
      </div>
    );
  }

  return (
    <div className="login-container">
      <h2>Login to ShopZone</h2>
      <p>Please login to proceed with your checkout.</p>
      <div className="login-box">
        <button className="btn-primary large" onClick={handleLogin}>
          Login as Guest
        </button>
      </div>
    </div>
  );
};

export default Login;
