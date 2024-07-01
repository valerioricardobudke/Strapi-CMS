import React from "react";
import Image from "next/image";

import overviewImg9 from "@/public/images/overview/overview9.png";
import overviewImg10 from "@/public/images/overview/overview10.png";
import overviewImg11 from "@/public/images/overview/overview11.png";

const Overview = () => {
  return (
    <div className="overview-area ptb-100 bg-f9f9f9">
      <div className="container">
        <div className="section-title">
          <span className="sub-title green-color">Services We Offer</span>
          <h2>We provide high-impact medical services</h2>
        </div>
        <div className="overview-item-style-two">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12 overview-image"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <Image src={overviewImg9} alt="overview-image" />
            </div>
            <div className="col-lg-6 col-md-12 overview-content">
              <h2 className="nunito-font">Cardiology department</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat sagittis, donec.
              </p>
              <ul className="overview-list">
                <li data-aos="fade-up" data-aos-duration="800">
                  <i className="flaticon-draw-check-mark"></i>
                  <h3 className="nunito-font">
                    <a href="#">Cardiac Rehabilitation</a>
                  </h3>
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
                  <h3 className="nunito-font">
                    <a href="#">Stress Testing</a>
                  </h3>
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
                  <h3 className="nunito-font">
                    <a href="#">Stenting</a>
                  </h3>
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
                  <h3 className="nunito-font">
                    <a href="#">Cardiac Catheterization</a>
                  </h3>
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
              <h2 className="nunito-font">Neurosurgery department</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat sagittis, donec.
              </p>
              <ul className="overview-list">
                <li data-aos="fade-up" data-aos-duration="800">
                  <i className="flaticon-draw-check-mark"></i>
                  <h3 className="nunito-font">
                    <a href="#">Surgical Oncology</a>
                  </h3>
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
                  <h3 className="nunito-font">
                    <a href="#">Neuro-Oncology</a>
                  </h3>
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
                  <h3 className="nunito-font">
                    <a href="#">Brain Stimulators</a>
                  </h3>
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
                  <h3 className="nunito-font">
                    <a href="#">Interventional Treatment</a>
                  </h3>
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
              <Image src={overviewImg10} alt="overview-image" />
            </div>
          </div>
        </div>

        <div className="overview-item-style-two">
          <div className="row align-items-center">
            <div
              className="col-lg-6 col-md-12 overview-image"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <Image src={overviewImg11} alt="overview-image" />
            </div>
            <div className="col-lg-6 col-md-12 overview-content">
              <h2 className="nunito-font">Dental department</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est
                non feugiat sagittis, donec.
              </p>
              <ul className="overview-list">
                <li data-aos="fade-up" data-aos-duration="800">
                  <i className="flaticon-draw-check-mark"></i>
                  <h3 className="nunito-font">
                    <a href="#">Dental Bridge</a>
                  </h3>
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
                  <h3 className="nunito-font">
                    <a href="#">Dental Implant</a>
                  </h3>
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
                  <h3 className="nunito-font">
                    <a href="#">magnetic Implant</a>
                  </h3>
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
                  <h3 className="nunito-font">
                    <a href="#">Cavity Filling</a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    est non feugiat sagittis, donec.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
