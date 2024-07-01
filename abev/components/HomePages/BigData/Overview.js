import React from "react";
import Image from "next/image";

import overviewImg7 from "@/public/images/overview/overview7.png";
import overviewImg8 from "@/public/images/overview/overview8.png";

const Overview = () => {
  return (
    <div className="overview-area ptb-100 bg-f9f9f9">
      <div className="container">
        <div className="section-title">
          <h2 className="nunito-font">Big Data Value & Benefits</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            mauris amet, placerat fames orci elementum adipiscing.
          </p>
        </div>
        <div className="overview-item-style-two">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12 overview-image"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <Image src={overviewImg7} alt="overview-image" />
            </div>
            <div className="col-lg-6 col-md-12 overview-content">
              <h2 className="nunito-font">Sales Increase</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat sagittis, donec.
              </p>
              <ul className="overview-list">
                <li data-aos="fade-up" data-aos-duration="800">
                  <i className="flaticon-draw-check-mark"></i>
                  <h3>Recommender Systems</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    est non feugiat sagittis, donec.
                  </p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  <h3>Demand Prediction</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    est non feugiat sagittis, donec.
                  </p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  <h3>Omnichannel Analytics</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    est non feugiat sagittis, donec.
                  </p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  <h3>Lead Generation</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    est non feugiat sagittis, donec.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="overview-item-style-two">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 overview-content">
              <h2 className="nunito-font">Risk Management</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat sagittis, donec.
              </p>
              <ul className="overview-list">
                <li data-aos="fade-up" data-aos-duration="800">
                  <i className="flaticon-draw-check-mark"></i>
                  <h3>Customer Churn Prediction</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    est non feugiat sagittis, donec.
                  </p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  <h3>Psychological Scoring</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    est non feugiat sagittis, donec.
                  </p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  <h3>Fraud Detection</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    est non feugiat sagittis, donec.
                  </p>
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  <i className="flaticon-draw-check-mark"></i>
                  <h3>Preventive Maintenance</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    est non feugiat sagittis, donec.
                  </p>
                </li>
              </ul>
            </div>
            <div
              className="col-lg-6 col-md-12 overview-image"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <Image src={overviewImg8} alt="overview-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
