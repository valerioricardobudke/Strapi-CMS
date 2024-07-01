import React from "react";
import Link from "next/link";

const HelpDesk = () => {
  return (
    <div className="help-desk-area pt-100 pb-75">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 col-md-12"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="section-title text-start">
              <span className="sub-title">How Can Help You</span>
              <h2>We&apos;re helping teams do their best work</h2>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className="single-help-desk-item">
                  <div className="icon">
                    <i className="flaticon-growth"></i>
                  </div>
                  <h3>The best consulting services</h3>
                  <p>
                    Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
                    Sed est non feugiat sagittis, donec.
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
                <div className="single-help-desk-item">
                  <div className="icon">
                    <i className="bx bx-dollar"></i>
                  </div>
                  <h3>Control over the finances system</h3>
                  <p>
                    Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.
                    Sed est non feugiat sagittis, donec.
                  </p>
                  <Link href="/services/services-details" className="link-btn">
                    Learn More <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpDesk;
