import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <><div className="about-pg feat bg-gray pt-5 pb-5">
      <div className="container-fluid">
        <div className="row">
          <div className="section-head col-sm-12">
            <h4><span>About </span> Us?</h4>
            <p>At JK.Living.co, we believe that a well-designed home is a reflection of personal taste and a sanctuary for relaxation and self-expression. Our team of passionate home enthusiasts works tirelessly to source and deliver products that meet our stringent standards for quality, aesthetics, and durability.</p>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <span className="icon feature_box_col_one"><i className="fa fa-globe"></i></span>
              <h6>Modern Design</h6>
              <p>Your premier destination for high-quality homeware products.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <span className="icon feature_box_col_two"><i className="fa fa-anchor"></i></span>
              <h6>Creative Design</h6>
              <p>We understand that shopping for homeware online can be daunting.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <span className="icon feature_box_col_three"><i className="fa fa-hourglass-half"></i></span>
              <h6>Customer Support</h6>
              <p>We are here to ensure that your experience with us is nothing short of delightful.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <span className="icon feature_box_col_four"><i className="fa fa-database"></i></span>
              <h6>Business Growth</h6>
              <p>Everyone wants to live on top of the mountain, but all the happiness and growth occurs while you're climbing it.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <span className="icon feature_box_col_five"><i className="fa fa-upload"></i></span>
              <h6>Commitment</h6>
              <p>What sets JK.Living.co apart is our commitment to excellence.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item">
              <span className="icon feature_box_col_six"><i className="fa fa-camera"></i></span>
              <h6>Affordable Cost</h6>
              <p>You say the word too much, and it becomes cheap.</p>
            </div>
          </div>
        </div>
      </div>

      <section>
    <section className="team-page-section">
        <div className="container">
        <div className="section-head col-sm-12">
            <h4><span>Our </span> Team</h4>
        </div>

            <div className="row-clearfix">
                <div className="team-block col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="image">
                           <img src="https://ca.slack-edge.com/TBPN1712Q-U051LGS86MU-98feb1a9c6d5-512" alt="Jessie" />
                        </div>
                        <div className="lower-content">
                            <h3>Jessie Kinganga</h3>
                            <div className="designation">CEO & Co-Founder </div>
                        </div>
                    </div>
                </div>
               
                <div className="team-block col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="image">
                          <img src="https://ca.slack-edge.com/TBPN1712Q-U051VK0GRRA-2dfd8a251e7f-512" alt="Joan" />
                        </div>
                        <div className="lower-content">
                            <h3>Joan Kalanzi</h3>
                            <div className="designation">CEO & Co-Founder</div>
                        </div>
                    </div>
                </div>
              

            </div>
        </div>
    </section>
</section>
    </div>
    
    </>
    
    
  );
};

export default AboutUs;
