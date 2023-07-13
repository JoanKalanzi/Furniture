import React from 'react';
import './AddNewFurniture.css';
import CheckImg from '../images/checkbg1.png';
import Logo from '../images/logo1.png';
import { AiFillCamera } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const AddFurniture = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle the form data directly
    const formData = new FormData(e.target);
    const newFurniture = {
      furnitureType: formData.get('furnitureType'),
      colour: formData.get('colour'),
      material: formData.get('material'),
      priceRange: formData.get('priceRange'),
      picture: '',
      additionalDescription: formData.get('additional-info'),
    };
    console.log(newFurniture);

    // Redirect to the success page
    navigate('/success');
  };

 

  return (
    <div className="center-form">
      <form className="signup-container" onSubmit={handleSubmit}>
        <div className="left-container">
          <img
            src={process.env.PUBLIC_URL + Logo}
            alt="logo"
            
            className="mylogo"
          />
          <div className="puppy">
            <img
              src={process.env.PUBLIC_URL + CheckImg}
              alt="logo"
              width={'40%'}
              className="checkout-image"
              style={{ float: 'left', marginRight: '10px' }}
            />
          </div>
        </div>
        <div className="right-container">
          <header>
            <h1>Struggling to find what you need? Discover the perfect match with our personalized form!</h1>
          </header>
          <div className="set">
            <div className="pets-name">
              <label htmlFor="pets-name">Furniture Type</label>
              <input type="text" id="pets-name" placeholder="Sofa" />
            </div>
            <div className="pets-photo">
              <button id="pets-upload">
                <AiFillCamera />
              </button>
              <label htmlFor="pets-upload">Upload a photo</label>
            </div>
          </div>
          <div className="set">
            <div className="pets-breed">
              <label htmlFor="pets-breed">Colour</label>
              <input type="text" id="pets-breed" placeholder="Velvet"  />
            </div>
            <div className="pets-birthday">
              <label htmlFor="pets-birthday">Material</label>
              <input type="text" id="pets-birthday" placeholder="Teal"  />
            </div>
          </div>
          <div className="set">
            <div className="pets-gender">
              <label htmlFor="pet-gender-female">Storage Required:</label>
              <div className="radio-container">
                <input type="radio" id="pet-gender-female" name="pet-gender" value="female" checked />
                <label htmlFor="pet-gender-female">Yes</label>
                <input type="radio" id="pet-gender-male" name="pet-gender" value="male" />
                <label htmlFor="pet-gender-male">No</label>
              </div>
            </div>
            <div className="pets-spayed-neutered">
              <label htmlFor="pet-spayed">Additional Info:</label>
              <input type="text" id="additional-info" placeholder="More Info" name="additional-info" />
            </div>
          </div>
          <div className="pets-weight">
            <label htmlFor="pet-weight-0-25">Price Range</label>
            <div className="radio-container">
              <input type="radio" id="pet-weight-0-25" name="pet-weight" value="£0-150" checked />
              <label htmlFor="pet-weight-0-25">£0-150</label>
              <input type="radio" id="pet-weight-25-50" name="pet-weight" value="£151-500" />
              <label htmlFor="pet-weight-25-50">£151-500</label>
              <input type="radio" id="pet-weight-50-100" name="pet-weight" value="£501-700" />
              <label htmlFor="pet-weight-50-100">£501-700</label>
              <input type="radio" id="pet-weight-100-plus" name="pet-weight" value="£700+" />
              <label htmlFor="pet-weight-100-plus">£700 +</label>
            </div>
          </div>
          <div className="check-bnt">
            <button className="checkout-button" type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
  }


export default AddFurniture;
