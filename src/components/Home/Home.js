import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <>
      <section id="heroGrid">
        <div id="featuredProduct" className="heroGridArea">
          <div id="headline">
            <h3 id="newCollection">New Collection</h3>
            <h2>Chairs & Stools</h2>
            <p>Armchair upholstered in synthetic leather. Powder coated steel legs.</p>
          </div>
        </div>
        <div id="secondaryProduct" className="heroGridArea"></div>
        <div id="CTA" className="heroGridArea">
          <h4>Shop Now</h4>
          <Link to="/show">
            <img src="https://media.houseandgarden.co.uk/photos/645cd63823689cbbe1bba9c1/1:1/w_1600%2Cc_limit/Massey_NH_Polebrook_141-production_digital.jpg" alt="" />
            <span className="arrow">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;

