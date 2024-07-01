import React from "react";
import Link from "next/link";
import Image from "next/image";

import aboutImg1 from "@/public/images/about/about1.jpg";

const About = () => {
  return (
    <div className="about-area with-top-border ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="about-image bg1">
              <Image src={aboutImg1} alt="about" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div
              className="about-content"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <span className="sub-title">About Us</span>
              <h2>The story behind our consulting firm</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                proin lectus in aliquam orci ornare nec. Commodo morbi tincidunt
                egestas velit.
              </p>
              <ul className="about-list">
                <li>
                  <div className="icon">
                    <i className="bx bx-check-double"></i>
                  </div>
                  Integrated Innovation
                  <Link href="/services/services-details" className="link-btn">
                    <i className="bx bx-chevron-right"></i>
                  </Link>
                </li>
                <li>
                  <div className="icon">
                    <i className="bx bx-check-double"></i>
                  </div>
                  Collaborative Culture
                  <Link href="/services/services-details" className="link-btn">
                    <i className="bx bx-chevron-right"></i>
                  </Link>
                </li>
                <li>
                  <div className="icon">
                    <i className="bx bx-check-double"></i>
                  </div>
                  Business Planning
                  <Link href="/services/services-details" className="link-btn">
                    <i className="bx bx-chevron-right"></i>
                  </Link>
                </li>
                <li>
                  <div className="icon">
                    <i className="bx bx-check-double"></i>
                  </div>
                  Professional Team
                  <Link href="/services/services-details" className="link-btn">
                    <i className="bx bx-chevron-right"></i>
                  </Link>
                </li>
              </ul>
              <Link href="/about-us" className="btn-style-one red-light-color">
                More About Us <i className="bx bx-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
