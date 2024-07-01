import React from "react";
import Link from "next/link";
import Image from "next/image";

import bannerImg8 from "@/public/images/banner/banner8.png";

const Banner = () => {
  return (
    <div className="chat-bot-banner-area">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-12 col-md-12">
            <div className="chat-bot-banner-content">
              <h1
                className="nunito-font"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                Build your brand connecting with customers
              </h1>
              <p
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                Velit hendrerit sit auctor tempor sem. Congue mi tempor
                condimentum felis arcu, non cursus. Nulla pharetra porttitor sed
                platea arcu et leo odio.
              </p>
              <div
                className="btn-box"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <Link href="/contact" className="btn-style-one purple-color">
                  Get Started Now <i className="bx bx-chevron-right"></i>
                </Link>
                <Link href="/about-us-1" className="btn-style-one white-color">
                  About Us <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xl-7 col-lg-12 col-md-12">
            <div className="chat-bot-banner-image">
              <Image src={bannerImg8} alt="banner-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
