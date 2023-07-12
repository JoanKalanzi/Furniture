import React from 'react';
import { Link } from 'react-router-dom';
import './FurnitureCard.css';

const FurnitureCard = ({ product, onAddToCart }) => {
  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <section className="container">
       <Link to={`/show/${product.id}`} className="product-link">
        <img src={product.image.url} alt={product.name} />
      </Link>
      <div className="card-content">
        <div className="card-text">
          <div className="product-title bigger-title">
            {product.name}
          </div>
        </div>
       <div className="product-price">£{product.price.formatted}</div>
      </div>
      <div className="card-actions">
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default FurnitureCard;

