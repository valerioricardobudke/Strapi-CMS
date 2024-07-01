import React from "react";
import Link from "next/link";
import Image from "next/image";

import bannerImg2 from "@/public/images/banner/banner2.png";
import bannerImg3 from "@/public/images/banner/banner3.png";

const Banner = () => {
  return (
    <div className="app-banner-area">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="app-banner-content">
              <span
                className="sub-title"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                #Get your 7 days free trial
              </span>

              <h1
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                Using your phone to payment & transfer money with Abev
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
                <Link
                  href="/contact"
                  className="btn-style-one light-green-color"
                >
                  Get Started Now <i className="bx bx-chevron-right"></i>
                </Link>

                <Link href="/about-us-1" className="btn-style-one white-color">
                  About Us <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="app-banner-image">
              <div className="img">
                <Image
                  src={bannerImg2}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  alt="banner-image"
                />
              </div>

              <div className="img">
                <Image src={bannerImg3} alt="banner-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
