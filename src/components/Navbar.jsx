import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';
import { CurrencyContext } from '../context/CurrencyContext';

const Navbar = () => {
  const { cartTotalCount } = useContext(CartContext);
  const { isAuthenticated, logout } = useContext(AuthContext);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { currency, toggleCurrency } = useContext(CurrencyContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">ShopZone</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-actions">
        <button onClick={toggleCurrency} className="btn-toggle-currency" title="Toggle Currency">
          {currency === 'USD' ? 'USD $' : 'INR ₹'}
        </button>
        <button onClick={toggleTheme} className="btn-toggle-theme" title="Toggle Theme">
          {isDarkMode ? '☀️' : '🌙'}
        </button>
        <Link to="/cart" className="cart-link">
          🛒 <span className="cart-count">{cartTotalCount}</span>
        </Link>
        {isAuthenticated ? (
          <button onClick={handleLogout} className="btn-logout">Logout</button>
        ) : (
          <Link to="/login" className="btn-login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
