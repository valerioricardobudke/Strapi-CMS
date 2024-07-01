import React from "react";

const Features = () => {
  return (
    <div className="features-area pt-100 pb-75">
      <div className="container">
        <div className="section-title">
          <span className="sub-title green-color">Our Features</span>
          <h2>
            Your comfort depends <br /> on Abev
          </h2>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="features-item">
              <div className="icon">
                <i className="bx bx-first-aid"></i>
              </div>
              <h3 className="nunito-font">Medical Treatment</h3>
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
            <div className="features-item">
              <div className="icon">
                <i className="bx bx-info-circle"></i>
              </div>
              <h3 className="nunito-font">Emergency Help</h3>
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
            <div className="features-item">
              <div className="icon">
                <i className="bx bxs-user-plus"></i>
              </div>
              <h3 className="nunito-font">Qualified Doctors</h3>
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
