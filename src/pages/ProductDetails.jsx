import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById } from '../services/api';
import { CartContext } from '../context/CartContext';
import { CurrencyContext } from '../context/CurrencyContext';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);
  const { formatPrice } = useContext(CurrencyContext);

  useEffect(() => {
    const getProduct = async () => {
      const data = await fetchProductById(id);
      setProduct(data);
      setLoading(false);
    };
    getProduct();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading product details...</div>;
  }

  if (!product) {
    return (
      <div className="error-container">
        <h2>Product not found</h2>
        <Link to="/shop">Back to Shop</Link>
      </div>
    );
  }

  return (
    <div className="product-details-container">
      <div className="product-details-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="product-details-info">
        <h2>{product.title}</h2>
        <p className="price">{formatPrice(product.price)}</p>
        <p className="description">{product.description}</p>
        <div className="tags">
          {product.tags && product.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <button className="btn-add-to-cart large" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
        <br />
        <Link to="/shop" className="back-link">← Back to Shop</Link>
      </div>
    </div>
  );
};

export default ProductDetails;
