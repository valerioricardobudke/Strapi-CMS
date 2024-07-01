import React from "react";
import Image from "next/image";

import overviewImg1 from "@/public/images/overview/overview1.png";
import overviewImg2 from "@/public/images/overview/overview2.png";

const Overview = () => {
  return (
    <div className="overview-area ptb-100 bg-f9f9f9">
      <div className="container">
        <div className="overview-box">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 overview-image">
              <Image src={overviewImg1} data-aos="fade-up" alt="overview" />
            </div>
            <div className="col-lg-6 col-md-12 overview-content">
              <span className="sub-title">Software Intregrations</span>
              <h2>Your valuable helping hand will find here</h2>
              <ul className="overview-list">
                <li data-aos="fade-up" data-aos-duration="800">
                  <span>
                    <i className="flaticon-draw-check-mark"></i>
                    Marketplace system
                  </span>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <span>
                    <i className="flaticon-draw-check-mark"></i>
                    Management system
                  </span>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <span>
                    <i className="flaticon-draw-check-mark"></i>
                    Remote system
                  </span>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  <span>
                    <i className="flaticon-draw-check-mark"></i>
                    File system
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="overview-box">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 overview-content">
              <span className="sub-title">Team Intregrations</span>
              <h2>It is an easy solution for a very large solution</h2>
              <ul className="overview-list">
                <li data-aos="fade-up" data-aos-duration="800">
                  <span>
                    <i className="flaticon-draw-check-mark"></i>
                    Business solution
                  </span>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <span>
                    <i className="flaticon-draw-check-mark"></i>
                    Management support
                  </span>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <span>
                    <i className="flaticon-draw-check-mark"></i>
                    Enterprise account
                  </span>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  <span>
                    <i className="flaticon-draw-check-mark"></i>
                    Market analysis
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-12 overview-image">
              <Image src={overviewImg2} data-aos="fade-up" alt="overview" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
