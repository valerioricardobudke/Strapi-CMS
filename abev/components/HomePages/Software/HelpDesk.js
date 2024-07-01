import React from "react";
import Link from "next/link";
import Image from "next/image";

import icon1 from "@/public/images/icon/icon1.png";
import icon2 from "@/public/images/icon/icon2.png";
import icon3 from "@/public/images/icon/icon3.png";
import icon4 from "@/public/images/icon/icon4.png";

const HelpDesk = () => {
  return (
    <div className="help-desk-area pb-75">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">How Can Help You</span>
          <h2>We’re helping teams do their best work</h2>
        </div>
        <div className="row">
          <div
            className="col-lg-3 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="single-help-desk-box">
              <div className="icon">
                <Image src={icon1} alt="icon" />
              </div>
              <h3>Zero Configuration</h3>
              <p>
                Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed
                est non feugiat sagittis, donec.
              </p>
              <Link href="/services/services-details" className="link-btn">
                Learn More <i className="bx bx-chevron-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <div className="single-help-desk-box">
              <div className="icon">
                <Image src={icon2} alt="icon" />
              </div>
              <h3>Code Security</h3>
              <p>
                Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed
                est non feugiat sagittis, donec.
              </p>
              <Link href="/services/services-details" className="link-btn">
                Learn More <i className="bx bx-chevron-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="single-help-desk-box">
              <div className="icon">
                <Image src={icon3} alt="icon" />
              </div>
              <h3>Team Management</h3>
              <p>
                Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed
                est non feugiat sagittis, donec.
              </p>
              <Link href="/services/services-details" className="link-btn">
                Learn More <i className="bx bx-chevron-right"></i>
              </Link>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <div className="single-help-desk-box">
              <div className="icon">
                <Image src={icon4} alt="icon" />
              </div>
              <h3>Access Controlled</h3>
              <p>
                Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed
                est non feugiat sagittis, donec.
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

export default HelpDesk;
