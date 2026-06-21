import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { CurrencyContext } from '../context/CurrencyContext';

const Cart = () => {
  const { cart, removeFromCart, cartTotalCount, cartTotalPrice } = useContext(CartContext);
  const { formatPrice, calculateTotal } = useContext(CurrencyContext);
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
        <Link to="/shop" className="btn-primary">Go Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart ({cartTotalCount} items)</h2>
      <div className="cart-content">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.thumbnail} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {formatPrice(item.price * item.quantity)}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="btn-remove">
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>{calculateTotal(cartTotalPrice)}</span>
          </div>
          <button className="btn-checkout" onClick={() => navigate('/checkout')}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
