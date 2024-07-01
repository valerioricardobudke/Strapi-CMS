import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <div className="services-area pt-100 bg-f9f9f9 pb-75">
      <div className="container">
        <div className="section-title">
          <span className="sub-title green-color">What We Offer</span>
          <h2 className="nunito-font">
            Everyone deserves the opportunity of home
          </h2>
        </div>

        <div className="row justify-content-center justify-content-center">
          <div
            className="col-lg-6 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="services-box">
              <div className="icon">
                <i className="flaticon-assets"></i>
              </div>
              <h3 className="nunito-font">
                <Link href="/services/services-details">
                  Property Management
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat sagidyttis, donec.
              </p>
              <Link href="/services/services-details" className="link-btn">
                Learn More <i className="bx bx-chevron-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-6 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <div className="services-box">
              <div className="icon">
                <i className="flaticon-mortgage"></i>
              </div>
              <h3 className="nunito-font">
                <Link href="/services/services-details">
                  Finance Real Estate
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat sagidyttis, donec.
              </p>
              <Link href="/services/services-details" className="link-btn">
                Learn More <i className="bx bx-chevron-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-6 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="services-box">
              <div className="icon">
                <i className="flaticon-challenges"></i>
              </div>
              <h3 className="nunito-font">
                <Link href="/services/services-details">
                  Business Development
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat sagidyttis, donec.
              </p>
              <Link href="/services/services-details" className="link-btn">
                Learn More <i className="bx bx-chevron-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-6 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="services-box">
              <div className="icon">
                <i className="flaticon-gold-bar"></i>
              </div>
              <h3 className="nunito-font">
                <Link href="/services/services-details">
                  Recover Asset Value
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat sagidyttis, donec.
              </p>
              <Link href="/services/services-details" className="link-btn">
                Learn More <i className="bx bx-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
