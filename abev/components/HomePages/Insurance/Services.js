import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <div className="services-area bg-fffbfb pt-100 pb-75">
      <div className="container">
        <div className="section-title">
          <span className="sub-title dark-green-color">What We Offer</span>
          <h2 className="nunito-font">
            We’re helping teams do their best work
          </h2>
        </div>
        
        <div className="row justify-content-center">
          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="single-services-item">
              <div className="icon color-ff004d">
                <i className="flaticon-life"></i>
              </div>
              <h3 className="nunito-font">
                <Link href="/services/services-details">
                  Term life insurance
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat sagittis, donec.
              </p>
              <Link href="/services/services-details" className="link-btn">
                View More <i className="bx bx-chevron-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <div className="single-services-item">
              <div className="icon color-d48000">
                <i className="flaticon-umbrella"></i>
              </div>
              <h3 className="nunito-font">
                <Link href="/services/services-details">
                  Universal life insurance
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat sagittis, donec.
              </p>
              <Link href="/services/services-details" className="link-btn">
                View More <i className="bx bx-chevron-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="single-services-item">
              <div className="icon color-2e85a1">
                <i className="flaticon-life-insurance"></i>
              </div>
              <h3 className="nunito-font">
                <Link href="/services/services-details">
                  Guaranteed Issue Whole Life
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat sagittis, donec.
              </p>
              <Link href="/services/services-details" className="link-btn">
                View More <i className="bx bx-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
