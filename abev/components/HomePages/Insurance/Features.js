import React from "react";

const Features = () => {
  return (
    <div className="features-area pt-100 pb-75">
      <div className="container">
        <div className="section-title">
          <span className="sub-title dark-green-color">Key Features</span>
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
            <div className="single-features-item">
              <div className="icon">
                <i className="flaticon-beach-umbrella"></i>
              </div>
              <h3 className="nunito-font">More Coverage</h3>
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
            <div className="single-features-item">
              <div className="icon">
                <i className="flaticon-ok"></i>
              </div>
              <h3 className="nunito-font">Hassle Free</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat feu sagittis, donec.
              </p>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="single-features-item">
              <div className="icon">
                <i className="flaticon-fast-time"></i>
              </div>
              <h3 className="nunito-font">Faster Benefits</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat feu sagittis, donec.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
