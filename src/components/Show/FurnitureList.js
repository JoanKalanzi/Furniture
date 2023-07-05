import React from 'react';
import './FurnitureList.css'; 

const FurnitureList = ({ data }) => {
  return (
    <div className="furniture-list">
      {data.map((item, index) => (
        <div className="furniture-item" key={index}>
          <img src={item.image} alt={item.name} className="furniture-image" />
          <h3 className="furniture-name">{item.name}</h3>
          <p className="furniture-description">{item.Description}</p>
          <p className="furniture-price">{item.Price}</p>
        </div>
      ))}
    </div>
  );
};

export default FurnitureList;
