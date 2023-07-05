/* eslint-disable react/jsx-no-undef */
import React from "react";
import './home.css'



function Home() {
  return (
  <>
  <section id="heroGrid">
      <div id="featuredProduct" class="heroGridArea">
        <div id="headline">
          <h3 id="newCollection">New Collection</h3>
          <h2>Chairs & Stools</h2>
          <p>Armchair upholstered in synthetic leather. Powder coated steel legs.</p>
        </div>
      </div>
      <div id="secondaryProduct" class="heroGridArea"></div>
      <div id="CTA" class="heroGridArea">
        <h4>Shop Now</h4>
        <img src="https://media.houseandgarden.co.uk/photos/645cd63823689cbbe1bba9c1/1:1/w_1600%2Cc_limit/Massey_NH_Polebrook_141-production_digital.jpg" alt=""/>
        </div>
    </section>
    
    </>
  );
}

export default Home;
