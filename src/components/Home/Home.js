/* eslint-disable react/jsx-no-undef */
import React from "react";
import './home.css'
import Banner from '../images/banner.png';



function Home() {
  return (
  <>
  <section className="heroGrid">
      <div className="featuredProduct heroGridArea">
      <div className="CTA" class="home-banner">
        <img
            src={process.env.PUBLIC_URL + Banner}
            alt="banner"
            className="banner"
          />
        </div>
        <div id="headline">
          <h3 id="newCollection">New Collection</h3>
          <h2>Chairs & Stools</h2>
          <p>Armchair upholstered in synthetic leather. Powder coated steel legs.</p>
        </div>
      </div>
      <div id="secondaryProduct" class="heroGridArea">

        
      </div>
    </section>
    
    </>
  );
}

export default Home;
