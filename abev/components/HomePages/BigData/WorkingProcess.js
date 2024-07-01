import React from "react";
import Image from "next/image";

import workingProcessImg2 from "@/public/images/working-process2.png";
import shapeImg10 from "@/public/images/shape/shape10.png";
import shapeImg11 from "@/public/images/shape/shape11.png";

const WorkingProcess = () => {
  return (
    <div className="working-process-area ptb-100 bg-13965f">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div
              className="working-process-img"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <Image src={workingProcessImg2} alt="working-process" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="working-process-text">
              <span className="sub-title">Our Working Process</span>
              <h2 className="nunito-font">
                Dedicated to help anything people’s needs
              </h2>
              <ul className="working-process-list">
                <li data-aos="fade-up" data-aos-duration="800">
                  <div className="number">1</div>
                  <h3>Integrate</h3>
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
                  <div className="number">2</div>
                  <h3>Manage</h3>
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
                  <div className="number">3</div>
                  <h3>Analyze</h3>
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

      {/* Shape Images */}
      <div className="shape10">
        <Image src={shapeImg10} alt="shape" />
      </div>
      <div className="shape11">
        <Image src={shapeImg11} alt="shape" />
      </div>
    </div>
  );
};

export default WorkingProcess;
