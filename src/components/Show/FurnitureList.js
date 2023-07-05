import React from 'react';
import './FurnitureList.css'; // Import CSS file for styling
import AddNewFurniture from '../Create/Create';

const FurnitureList = ({ data, addFurniture }) => {
  return (
    <div className="furniture-list">
      {/* Existing furniture items */}
      {data.map((item, index) => (
        <div className="furniture-item" key={index}>
          {/* Render furniture item details */}
        </div>
      ))}

      {/* Add New Furniture form */}
      <AddNewFurniture addFurniture={addFurniture} />
    </div>
  );
};

export default FurnitureList;