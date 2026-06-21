import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { CurrencyContext } from '../context/CurrencyContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { formatPrice } = useContext(CurrencyContext);

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigating to product details if button is clicked
    addToCart(product);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-card-link">
        <div className="product-image-container">
          <img src={product.thumbnail} alt={product.title} className="product-image" />
        </div>
        <div className="product-info">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">{formatPrice(product.price)}</p>
        </div>
      </Link>
      <button onClick={handleAddToCart} className="btn-add-to-cart">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
