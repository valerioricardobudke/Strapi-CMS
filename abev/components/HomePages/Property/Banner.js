import React from "react";
import Image from "next/image";

import bannerImg5 from "@/public/images/banner/banner5.jpg";

const Banner = () => {
  return (
    <div className="property-banner-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="property-banner-content">
              <span
                className="sub-title"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                Single Property
              </span>

              <h1
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
                className="nunito-font"
              >
                Your Gateway to a Richer Life
              </h1>

              <p
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                At the end of the day, we want a home that matches our
                lifestyle. Abev knows that and promises clients their agents are
                ready and waiting to help find the perfect fit.
              </p>

              <form
                className="search-form"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <div className="row">
                  <div className="col-lg-5 col-md-4">
                    <div className="form-group">
                      <label>Location</label>
                      <input type="text" placeholder="Where to?" />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="form-group">
                      <label>Dates</label>
                      <input type="text" placeholder="How long?" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <button type="submit" className="btn-style-one green-color">
                      Search Now <i className="bx bx-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div
              className="property-banner-image"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <Image src={bannerImg5} alt="banner-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
