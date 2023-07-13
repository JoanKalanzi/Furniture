import React from 'react';
import './success.css';
import Img3 from '../images/img8.jpeg';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="center-form">
      <div className="success-container">
        <div className="form-container">
          <img
            src={process.env.PUBLIC_URL + Img3}
            alt=""
            className="success-image"
          />
          <div className="message-container">
            <h2 className='success-h2'>Thank you for your custom request!</h2>
            <p>Our team will carefully review your request</p>
            <p>and aim to provide a response within 3-5 business days.</p>
            <p className="click-message">To shop some more, click:</p>
            <Link to="/show" className="success-button">Store</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
