import React from "react";
import Link from "next/link";
import Image from "next/image";

import overviewImg1 from "@/public/images/overview/overview3.png";
import overviewImg2 from "@/public/images/overview/overview4.png";
import overviewImg3 from "@/public/images/overview/overview5.png";
import overviewImg4 from "@/public/images/overview/overview6.png";

const Overview = () => {
  return (
    <div className="overview-area ptb-100 with-top-border">
      <div className="container">
        <div className="overview-item">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12 overview-image style-one">
              <div className="img">
                <Image
                  src={overviewImg1}
                  data-aos="fade-down"
                  data-aos-duration="800"
                  alt="overview-image"
                />
              </div>
              <div className="img">
                <Image
                  src={overviewImg2}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  alt="overview-image"
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-12 overview-content">
              <span className="sub-title">Send & Receive Payments</span>
              <h2>Online payments for any business setup</h2>
              <ul className="overview-list">
                <li data-aos="fade-up" data-aos-duration="800">
                  <i className="flaticon-draw-check-mark"></i>
                  Verification for 1 business day
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  No setup fee, no hidden fees
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  Transparent payouts details
                </li>
              </ul>
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
              </div>
            </div>
          </div>
        </div>

        <div className="overview-item">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 overview-content">
              <span className="sub-title">Minimal Dashboard</span>
              <h2>The world’s most powerful & easy-to-use</h2>
              <ul className="overview-list">
                <li data-aos="fade-up" data-aos-duration="800">
                  <i className="flaticon-draw-check-mark"></i>
                  Fastest way to integrate payments
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  Get instant notifications
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  Support assistance with integration
                </li>
              </ul>
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
              </div>
            </div>
            <div className="col-lg-7 col-md-12 overview-image style-two">
              <div className="img">
                <Image
                  src={overviewImg3}
                  data-aos="fade-up"
                  data-aos-duration="800"
                  alt="overview-image"
                />
              </div>

              <div className="img">
                <Image src={overviewImg4} alt="overview-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
