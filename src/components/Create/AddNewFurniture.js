import React, { useState } from 'react';
import './AddNewFurniture.css';

const AddFurniture = ({ onAddFurniture }) => {
  const [furnitureType, setFurnitureType] = useState('');
  const [colour, setColour] = useState('');
  const [material, setMaterial] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [picture, setPicture] = useState('');
  const [additionalDescription, setAdditionalDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFurniture = {
      furnitureType,
      colour,
      material,
      priceRange,
      picture,
      additionalDescription,
    };
    onAddFurniture(newFurniture);
    setFurnitureType('');
    setColour('');
    setMaterial('');
    setPriceRange('');
    setPicture('');
    setAdditionalDescription('');
    setSubmitted(true);
  };

  return (
    <div className="add-furniture">
      <h2 className="add-furniture-heading">Add New Furniture</h2>
      {submitted ? (
        <p>Thank you for your request. Someone from the team will look into this and get back to you soon.</p>
      ) : (
        <form className="add-furniture-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="furnitureType">
              Furniture Type
            </label>
            <select
              className="form-input"
              id="furnitureType"
              value={furnitureType}
              onChange={(e) => setFurnitureType(e.target.value)}
            >
              <option value="">Select furniture type</option>
              <option value="Chair">Chair</option>
              <option value="Table">Table</option>
              <option value="Sofa">Sofa</option>
              <option value="Bed">Bed</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="colour">
              Colour
            </label>
            <input
              className="form-input"
              type="text"
              id="colour"
              value={colour}
              onChange={(e) => setColour(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="material">
              Material
            </label>
            <input
              className="form-input"
              type="text"
              id="material"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="priceRange">
              Price Range
            </label>
            <select
              className="form-input"
              id="priceRange"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="">Select price range</option>
              <option value="£0-150">£0-150</option>
              <option value="£151-500">£151-500</option>
              <option value="£501-700">£501-700</option>
              <option value="£700+">£700 +</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="picture">
              Picture URL
            </label>
            <input
              className="form-input"
              type="text"
              id="picture"
              value={picture}
              onChange={(e) => setPicture(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="additionalDescription">
              Additional Description
            </label>
            <textarea
              className="form-input"
              id="additionalDescription"
              value={additionalDescription}
              onChange={(e) => setAdditionalDescription(e.target.value)}
            />
          </div>

          <button className="form-submit-btn" type="submit">
            Add Furniture
          </button>
        </form>
      )}
    </div>
  );
};

export default AddFurniture;
