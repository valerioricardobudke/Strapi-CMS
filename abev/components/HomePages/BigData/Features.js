import React from "react";

const Features = () => {
  return (
    <div className="features-area pb-75">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="features-item">
              <div className="icon">
                <i className="flaticon-big-data"></i>
              </div>
              <h3 className="nunito-font">Big Data Integration</h3>
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
                <i className="flaticon-data-management"></i>
              </div>
              <h3 className="nunito-font">Big Data Management</h3>
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
                <i className="flaticon-monitor"></i>
              </div>
              <h3 className="nunito-font">Big Data Analysis</h3>
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
