import React from "react";
import Link from "next/link";
import Image from "next/image";

import icon13 from "@/public/images/icon/icon13.png";
import icon14 from "@/public/images/icon/icon14.png";
import icon15 from "@/public/images/icon/icon15.png";

const Services = () => {
  return (
    <div className="services-area with-top-border pt-100 pb-75">
      <div className="container">
        <div className="section-title">
          <span className="sub-title purple-color">What We Offer</span>
          <h2 className="nunito-font">Connect with users across channels</h2>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="single-services-item style-two">
              <div className="icon">
                <Image src={icon13} alt="icon" />
              </div>
              <h3 className="nunito-font">
                <Link href="/services/services-details">Website</Link>
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
            <div className="single-services-item style-two">
              <div className="icon">
                <Image src={icon14} alt="icon" />
              </div>
              <h3 className="nunito-font">
                <Link href="/services/services-details">LiveChat</Link>
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
            <div className="single-services-item style-two">
              <div className="icon">
                <Image src={icon15} alt="icon" />
              </div>
              <h3 className="nunito-font">
                <Link href="/services/services-details">Slack</Link>
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
