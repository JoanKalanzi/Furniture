import React from 'react';
import './FurnitureList.css';
import FurnitureCard from '../FurnitureCard';

const FurnitureList = ({ data, onAddToCart }) => {
  return (
    <main className="furniture-list">
       <div className="section-head col-sm-12">
            <h4><span>Our </span> shop</h4>
          </div>
      <div className="furniture-grid">
        {data.map((product) => (
          <FurnitureCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </main>
  );
};

export default FurnitureList;


