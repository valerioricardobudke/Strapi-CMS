import React from "react";
import Image from "next/image";

import residenceImg from "@/public/images/residence.jpg";
import shapeImg9 from "@/public/images/shape/shape9.png";

const Residence = () => {
  return (
    <div className="residence-area ptb-100 br-bottom-100 bg-f9f9f9">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="residence-content">
              <span className="sub-title">Residence Area</span>
              <h2 className="nunito-font">
                Let Our Family Show Your Family the Way Home
              </h2>
              <div className="box" data-aos="fade-up" data-aos-duration="800">
                <i className="flaticon-draw-check-mark"></i>
                <h3>Interior Details</h3>
                <ul>
                  <li>
                    <span>Interior Size:</span>
                    2500 sq ft
                  </li>
                  <li>
                    <span>Bedrooms:</span>4
                  </li>
                  <li>
                    <span>Bathrooms:</span>3
                  </li>
                  <li>
                    <span>Garage:</span>3 car
                  </li>
                  <li>
                    <span>Laundry Room:</span>
                    Washer/Dryer Hookups
                  </li>
                </ul>
              </div>
              <div
                className="box"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                <i className="flaticon-draw-check-mark"></i>
                <h3>Room Dimensions</h3>
                <ul>
                  <li>
                    <span>Living Room:</span>
                    29x18
                  </li>
                  <li>
                    <span>Dining Room:</span>
                    12x11
                  </li>
                  <li>
                    <span>Kitchen:</span>
                    15x14
                  </li>
                  <li>
                    <span>Master Bedroom:</span>
                    23x14
                  </li>
                  <li>
                    <span>Bedroom 2:</span>
                    12x11
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="residence-image">
              <Image src={residenceImg} alt="residence-image" />
            </div>
          </div>
        </div>
      </div>

      <div className="shape9">
        <Image src={shapeImg9} alt="shape" />
      </div>
    </div>
  );
};

export default Residence;
