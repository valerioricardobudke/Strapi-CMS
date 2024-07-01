import React from "react";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-area pt-100 pb-75">
      <div className="container">
        <div className="section-title">
          <h2 className="nunito-font">Why Choose Abev?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            mauris amet, placerat fames orci elementum adipiscing.
          </p>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="single-why-choose-us-box">
              <div className="icon">
                <i className="flaticon-expand"></i>
              </div>
              <h3 className="nunito-font">
                <Link href="/services/services-details">Easy to Deploy</Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat sagittis, donec.
              </p>
              <Link href="/services/services-details" className="link-btn">
                Learn More <i className="bx bx-chevron-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <div className="single-why-choose-us-box active">
              <div className="icon">
                <i className="flaticon-return-on-investment"></i>
              </div>
              <h3 className="nunito-font">
                <Link href="/services/services-details">Cost Effective</Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat sagittis, donec.
              </p>
              <Link href="/services/services-details" className="link-btn">
                Learn More <i className="bx bx-chevron-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="single-why-choose-us-box">
              <div className="icon">
                <i className="flaticon-simple"></i>
              </div>
              <h3 className="nunito-font">
                <Link href="/services/services-details">Simple & Flexible</Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat sagittis, donec.
              </p>
              <Link href="/services/services-details" className="link-btn">
                Learn More <i className="bx bx-chevron-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="single-why-choose-us-box">
              <div className="icon">
                <i className="flaticon-bell"></i>
              </div>
              <h3 className="nunito-font">
                <Link href="/services/services-details">Real-Time Alerts</Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat sagittis, donec.
              </p>
              <Link href="/services/services-details" className="link-btn">
                Learn More <i className="bx bx-chevron-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <div className="single-why-choose-us-box">
              <div className="icon">
                <i className="flaticon-maximize"></i>
              </div>
              <h3 className="nunito-font">
                <Link href="/services/services-details">
                  Massively Scalable
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat sagittis, donec.
              </p>
              <Link href="/services/services-details" className="link-btn">
                Learn More <i className="bx bx-chevron-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="single-why-choose-us-box">
              <div className="icon">
                <i className="flaticon-security"></i>
              </div>
              <h3 className="nunito-font">
                <Link href="/services/services-details">Robust Security</Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat sagittis, donec.
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

export default WhyChooseUs;
