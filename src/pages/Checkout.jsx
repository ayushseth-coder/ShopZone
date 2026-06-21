import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CurrencyContext } from '../context/CurrencyContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, cartTotalPrice, clearCart } = useContext(CartContext);
  const { formatPrice, calculateTotal } = useContext(CurrencyContext);
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    alert('Order placed successfully! Thank you for shopping at ShopZone.');
    clearCart();
    navigate('/');
  };

  if (cart.length === 0) {
    return (
      <div className="checkout-container">
        <h2>Checkout</h2>
        <p>Your cart is empty. Please add items to checkout.</p>
        <button className="btn-primary" onClick={() => navigate('/shop')}>
          Back to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Checkout Summary</h2>
      <div className="checkout-content">
        <ul className="checkout-items">
          {cart.map((item) => (
            <li key={item.id}>
              {item.title} (x{item.quantity}) - {formatPrice(item.price * item.quantity)}
            </li>
          ))}
        </ul>
        <h3>Total to Pay: {calculateTotal(cartTotalPrice)}</h3>
        <button className="btn-primary large" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
