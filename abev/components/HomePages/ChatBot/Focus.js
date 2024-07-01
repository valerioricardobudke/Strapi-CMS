import React from "react";
import Link from "next/link";
import Image from "next/image";

import goalImg4 from "@/public/images/goal4.png";

const Focus = () => {
  return (
    <div className="goal-area ptb-100 bg-711f7f">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="goal-content style-two">
              <span className="sub-title">We Protect You</span>
              <h2 className="nunito-font">
                Provide highly-tailored product recommendations
              </h2>
              <ul className="overview-list">
                <li data-aos="fade-up" data-aos-duration="800">
                  <i className="flaticon-draw-check-mark"></i>
                  Customer churn prediction
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  Social media monitoring
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  Preventive maintenance
                </li>
              </ul>
              <div
                className="btn-box"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <Link href="/contact" className="btn-style-one white-color">
                  Get Started Now <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-12"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="goal-image style-two">
              <Image src={goalImg4} alt="goal4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Focus;
