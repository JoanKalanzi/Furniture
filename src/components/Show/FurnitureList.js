import React from 'react';
import './FurnitureList.css';

const FurnitureList = ({ data }) => {
  const handleBuy = (name) => {
    // Handle buy functionality for the furniture item
    console.log(`Buy ${name}`);
  };

  const handleFavorite = (name) => {
    // Handle favorite functionality for the furniture item
    console.log(`Favorite ${name}`);
  };

  return (
    <div className="furniture-list">
      {data.map((item, index) => (
        <div className="furniture-item" key={index}>
          <img src={item.image} alt={item.name} className="furniture-image" />
          <h3 className="furniture-name">{item.name}</h3>
          <p className="furniture-description">{item.Description}</p>
          <p className="furniture-price">{item.Price}</p>
          <div className="furniture-buttons">
            <button onClick={() => handleBuy(item.name)}>Buy</button>
            <button onClick={() => handleFavorite(item.name)}>Favorite</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FurnitureList;

