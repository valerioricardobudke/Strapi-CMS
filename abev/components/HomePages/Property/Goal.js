import React from "react";
import Image from "next/image";

import goalImg2 from "@/public/images/goal2.jpg";
import shapeImg8 from "@/public/images/shape/shape8.png";

const Goal = () => {
  return (
    <div className="goal-area ptb-100 br-bottom-100 bg-f9f9f9">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="goal-img">
              <Image src={goalImg2} alt="goal-image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="goal-text">
              <span className="sub-title">Our Goal</span>
              <h2 className="nunito-font">
                Helping you find the property of your dreams
              </h2>
              <ul className="overview-list">
                <li data-aos="fade-up" data-aos-duration="800">
                  <i className="flaticon-draw-check-mark"></i>
                  <h3>High returns:</h3>
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
                  <h3>Short-term:</h3>
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
                  <h3>Low minimum:</h3>
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

      <div className="shape8">
        <Image src={shapeImg8} alt="shape" />
      </div>
    </div>
  );
};

export default Goal;
