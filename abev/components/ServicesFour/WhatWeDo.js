import React from "react";
import Link from "next/link";
import Image from "next/image";

import icon9 from "@/public/images/icon/icon9.png";
import icon10 from "@/public/images/icon/icon10.png";
import icon11 from "@/public/images/icon/icon11.png";
import icon12 from "@/public/images/icon/icon12.png";

const WhatWeDo = () => {
  return (
    <div className="what-we-do-area pt-100 pb-75">
      <div className="container">
        <div className="section-title">
          <span className="sub-title purple-color">What We Do</span>
          <h2 className="nunito-font">
            Our work is delivered by the best team in the world
          </h2>
        </div>

        <div className="row">
          <div
            className="col-lg-6 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="single-what-we-do-box purple-color">
              <div className="icon">
                <Image src={icon9} alt="icon" />
              </div>
              <h3>
                <Link href="/services/services-details">
                  Incredible Infrastructure
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, conse ctetur adipi scing elit sed
                est. Our work is delivered by the best team in the world.
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
            <div className="single-what-we-do-box purple-color">
              <div className="icon">
                <Image src={icon10} alt="icon" />
              </div>
              <h3>
                <Link href="/services/services-details">
                  Deadline Reminders
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, conse ctetur adipi scing elit sed
                est. Our work is delivered by the best team in the world.
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
            <div className="single-what-we-do-box purple-color">
              <div className="icon">
                <Image src={icon11} alt="icon" />
              </div>
              <h3>
                <Link href="/services/services-details">
                  Information Retrieval
                </Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, conse ctetur adipi scing elit sed
                est. Our work is delivered by the best team in the world.
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
            <div className="single-what-we-do-box purple-color">
              <div className="icon">
                <Image src={icon12} alt="icon" />
              </div>
              <h3>
                <Link href="/services/services-details">Simple Dashboard</Link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, conse ctetur adipi scing elit sed
                est. Our work is delivered by the best team in the world.
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

export default WhatWeDo;
