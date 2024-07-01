import React from "react";
import Link from "next/link";
import Image from "next/image";

import bannerImg6 from "@/public/images/banner/banner6.png";

const Banner = () => {
  return (
    <div className="big-data-banner-area">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="big-data-banner-content">
              <span
                className="sub-title"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                #Get your 7 days free trial
              </span>
              <h1
                className="nunito-font"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                Big data, bigger ideas, big deal
              </h1>
              <p
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                Velit hendrerit sit auctor tempor sem. Congue mi tempor
                condimentum felis arcu, non cursus. Nulla pharetra porttitor sed
                platea arcu et leo odio.
              </p>
              <div
                className="btn-box"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <Link href="/contact" className="btn-style-one orange-color">
                  Get Started Now <i className="bx bx-chevron-right"></i>
                </Link>

                <Link href="/about-us-1" className="btn-style-one white-color">
                  About Us <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div
              className="big-data-banner-image"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <Image src={bannerImg6} alt="banner-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
