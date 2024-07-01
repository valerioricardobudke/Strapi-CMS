import React from "react";

const Features = () => {
  return (
    <div className="features-area pt-100 pb-75">
      <div className="container">
        <div className="section-title">
          <span className="sub-title yellow-color">Education for everyone</span>
          <h2 className="nunito-font">
            Affordable online courses and learning opportunities​
          </h2>
        </div>

        <div className="row justify-content-center">
          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="features-box style-two">
              <div className="icon">
                <i className="flaticon-growth"></i>
              </div>
              <h3 className="nunito-font">Learn the Latest Top Skills</h3>
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
            <div className="features-box style-two">
              <div className="icon">
                <i className="flaticon-fast-time"></i>
              </div>
              <h3 className="nunito-font">Learn in Your Own Pace</h3>
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
            <div className="features-box style-two">
              <div className="icon">
                <i className="flaticon-connection"></i>
              </div>
              <h3 className="nunito-font">Learn From Industry Experts</h3>
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
