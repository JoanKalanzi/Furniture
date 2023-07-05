import React, { useState } from 'react';
import './AddNewFurniture.css';
const AddFurniture = ({ onAddFurniture }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFurniture = {
      name,
      description,
      price,
      image,
    };
    onAddFurniture(newFurniture);
    setName('');
    setDescription('');
    setPrice('');
    setImage('');
  };

  return (
    <div className="add-furniture">
      <h2 className="add-furniture-heading">Add New Furniture</h2>
      <form className="add-furniture-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="description">
            Description
          </label>
          <input
            className="form-input"
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="price">
            Price
          </label>
          <input
            className="form-input"
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="image">
            Image URL
          </label>
          <input
            className="form-input"
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <button className="form-submit-btn" type="submit">
          Add Furniture
        </button>
      </form>
    </div>
  );
};

export default AddFurniture;
