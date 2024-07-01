import React from "react";
import Link from "next/link";

const Services = () => {
  return (
    <div className="services-area bg-fff4f8 pt-100 pb-75">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Services We Offer</span>
          <h2>We provide high-impact business services</h2>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="single-services-box">
              <div className="icon">
                <i className="flaticon-career"></i>
              </div>
              <h3>
                <Link href="/services/services-details">
                  Company & Business Setup
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit. Dui id duis
                accumsan, eget aliquam varius. A sodales id nulla amet ultricies
                eget. At nulla mattis mattis.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <div className="single-services-box">
              <div className="icon">
                <i className="flaticon-growth"></i>
              </div>
              <h3>
                <Link href="/services/services-details">
                  Strategic Consulting
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit. Dui id duis
                accumsan, eget aliquam varius. A sodales id nulla amet ultricies
                eget. At nulla mattis mattis.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="single-services-box">
              <div className="icon">
                <i className="flaticon-return-of-investment"></i>
              </div>
              <h3>
                <Link href="/services/services-details">
                  Investment Management
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit. Dui id duis
                accumsan, eget aliquam varius. A sodales id nulla amet ultricies
                eget. At nulla mattis mattis.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="single-services-box">
              <div className="icon">
                <i className="flaticon-management-1"></i>
              </div>
              <h3>
                <Link href="/services/services-details">
                  Company Management
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit. Dui id duis
                accumsan, eget aliquam varius. A sodales id nulla amet ultricies
                eget. At nulla mattis mattis.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <div className="single-services-box">
              <div className="icon">
                <i className="flaticon-money"></i>
              </div>
              <h3>
                <Link href="/services/services-details">
                  Finance Consulting
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit. Dui id duis
                accumsan, eget aliquam varius. A sodales id nulla amet ultricies
                eget. At nulla mattis mattis.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="single-services-box">
              <div className="icon">
                <i className="flaticon-human-resources"></i>
              </div>
              <h3>
                <Link href="/services/services-details">Human Resources</Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit. Dui id duis
                accumsan, eget aliquam varius. A sodales id nulla amet ultricies
                eget. At nulla mattis mattis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
