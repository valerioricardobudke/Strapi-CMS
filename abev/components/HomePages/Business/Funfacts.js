import React from "react";

const Funfacts = () => {
  return (
    <div className="funfacts-area pb-75 bg-fff4f8">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-3 col-md-3 col-sm-3 col-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="single-funfacts-box">
              <div className="icon">
                <i className="flaticon-employee"></i>
              </div>
              <h3>480</h3>
              <p>CONSULTING SOLUTIONS</p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-3 col-sm-3 col-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <div className="single-funfacts-box">
              <div className="icon">
                <i className="flaticon-projects"></i>
              </div>
              <h3>535</h3>
              <p>COMPLETED CASES</p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-3 col-sm-3 col-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="single-funfacts-box">
              <div className="icon">
                <i className="flaticon-rating"></i>
              </div>
              <h3>655</h3>
              <p>HAPPY CUSTOMERS</p>
            </div>
          </div>
          
          <div
            className="col-lg-3 col-md-3 col-sm-3 col-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <div className="single-funfacts-box">
              <div className="icon">
                <i className="flaticon-expert"></i>
              </div>
              <h3>272</h3>
              <p>EXPERT CONSULTANT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funfacts;
