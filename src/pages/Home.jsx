import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to ShopZone</h1>
        <p>Discover the best products at unbeatable prices.</p>
        <Link to="/shop" className="btn-primary">
          Start Shopping
        </Link>
      </div>
      <div className="features-section">
        <div className="feature">
          <h3>Fast Delivery</h3>
          <p>Get your items delivered within 24 hours.</p>
        </div>
        <div className="feature">
          <h3>Quality Guarantee</h3>
          <p>We ensure top-notch quality for all products.</p>
        </div>
        <div className="feature">
          <h3>24/7 Support</h3>
          <p>Our customer service is here to help anytime.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
