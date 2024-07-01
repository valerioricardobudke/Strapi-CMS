import React from "react";

const Features = () => {
  return (
    <div className="features-area mt-minus-40 pb-75">
      <div className="container">
        <div className="section-title">
          <span className="sub-title purple-color">Key Features</span>
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
            <div className="single-features-item style-two">
              <div className="icon">
                <i className="flaticon-comment"></i>
              </div>
              <h3 className="nunito-font">Live Chat Handover </h3>
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
            <div className="single-features-item style-two">
              <div className="icon">
                <i className="flaticon-analytics"></i>
              </div>
              <h3 className="nunito-font">Sentiment Analysis </h3>
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
            <div className="single-features-item style-two">
              <div className="icon">
                <i className="flaticon-artificial-intelligence"></i>
              </div>
              <h3 className="nunito-font">Artificial Intelligence</h3>
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
