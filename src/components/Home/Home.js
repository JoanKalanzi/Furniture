/* eslint-disable react/jsx-no-undef */
import React from "react";
import './home.css'


function Home() {
  return (
    <>
      <section className="home">
        <div className="home-banner">
        </div>
        <div className="headline">
          <h3 className="newCollection">New Collection</h3>
          <h2 className="home-h2">Chairs &amp; Stools</h2>
          <p className="home-p">Armchair upholstered in synthetic leather. Powder coated steel legs.</p>
        </div>
      </section>

      <div class="subHeading">
      <h3>Shop Our New Collection</h3>
    </div>

    <section id="categoryGrid" className="grid">
  <div id="bookcases" className="categoryGridArea">
    <div className="heading">Madison</div>
  </div>
  <div id="bedroom" className="categoryGridArea">
    <div className="heading">Mayfair</div>
  </div>
  <div id="couches" className="categoryGridArea">
    <div className="heading">Paris</div>
  </div>
  <div id="patio" className="categoryGridArea">
    <div className="heading">Royal</div>
  </div>
</section>


    </>
  );
}

export default Home;

