import React from "react";
import Link from "next/link";
import Image from "next/image";

import bannerImg7 from "@/public/images/banner/banner7.png";
import coursesImg4 from "@/public/images/courses/courses4.jpg";
import userImg1 from "@/public/images/user/user1.jpg";
import shapeImg15 from "@/public/images/shape/shape15.png";
import shapeImg16 from "@/public/images/shape/shape16.png";
import shapeImg17 from "@/public/images/shape/shape17.png";

const Banner = () => {
  return (
    <div className="distance-learning-banner-area">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-xl-4 col-lg-12 col-md-12">
            <div className="distance-learning-banner-content">
              <span
                className="sub-title"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                Online Education
              </span>

              <h1
                className="nunito-font"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                World&apos;s largest distance learning provider
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
                <Link href="/contact" className="btn-style-one yellow-color">
                  Get Started Now <i className="bx bx-chevron-right"></i>
                </Link>
                <Link href="/about-us-1" className="btn-style-one white-color">
                  About Us <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xl-8 col-lg-12 col-md-12">
            <div className="distance-learning-banner-image">
              <Image src={bannerImg7} alt="banner-image" />
            </div>
          </div>
        </div>

        <div className="single-courses-box">
          <Link href="/courses/courses-details" className="image d-block">
            <Image src={coursesImg4} alt="courses" />
          </Link>

          <div className="content">
            <div className="price">$45</div>
            <h3 className="nunito-font">
              <Link href="/courses/courses-details">
                Node.js for Beginners: Go From Zero to Hero with Node.js
              </Link>
            </h3>
            <ul className="info d-flex align-items-center justify-content-between">
              <li>
                <div className="author d-flex align-items-center">
                  <div className="img">
                    <Image src={userImg1} alt="author" />
                  </div>
                  <span>David Allen</span>
                </div>
              </li>
              <li>
                <span className="status">Popular</span>
              </li>
            </ul>
          </div>
          <ul className="box-footer d-flex justify-content-between align-items-center">
            <li>
              <i className="flaticon-video-player"></i> 14 Lessons
            </li>
            <li>
              <i className="flaticon-team"></i> 125 Students
            </li>
          </ul>
        </div>
      </div>

      {/* Shape Images */}
      <div className="shape15">
        <Image src={shapeImg15} alt="shape" />
      </div>
      <div className="shape16">
        <Image src={shapeImg16} alt="shape" />
      </div>
      <div className="shape17">
        <Image src={shapeImg17} alt="shape" />
      </div>
    </div>
  );
};

export default Banner;
