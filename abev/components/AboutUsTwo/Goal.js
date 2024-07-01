import React from "react";
import Link from "next/link";
import Image from "next/image";

import goalImg from "@/public/images/goal.png";

const Goal = () => {
  return (
    <div className="goal-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 col-md-12"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="goal-image">
              <Image src={goalImg} alt="goal-image" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="goal-content">
              <span className="sub-title">About Us</span>
              <h2 className="nunito-font">
                Protecting families and their futures
              </h2>
              <ul className="overview-list">
                <li data-aos="fade-up" data-aos-duration="800">
                  <i className="flaticon-draw-check-mark"></i>
                  We invest for long-term results
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  We manage risk in-house, in real time
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  Growing your business
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  25 Years of experience
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="400"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  We maintain consistently high ratings
                </li>
              </ul>
              <div
                className="btn-box"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <Link
                  href="/contact"
                  className="btn-style-one dark-green-color"
                >
                  Contact Us <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goal;
