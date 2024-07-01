import React from "react";

const Features = () => {
  return (
    <div className="features-area pt-100 pb-75">
      <div className="container">
        <div className="section-title">
          <span className="sub-title green-color">Key Features</span>
          <h2 className="nunito-font">
            Most probably included best features ever
          </h2>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="features-box">
              <div className="icon">
                <i className="flaticon-nature"></i>
              </div>
              <h3 className="nunito-font">Nature All Around You</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat sagittis, donec.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <div className="features-box">
              <div className="icon">
                <i className="flaticon-parking"></i>
              </div>
              <h3 className="nunito-font">Get Free Parking Place</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat sagittis, donec.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="features-box">
              <div className="icon">
                <i className="flaticon-shield"></i>
              </div>
              <h3 className="nunito-font">24/7 Security</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat sagittis, donec.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
