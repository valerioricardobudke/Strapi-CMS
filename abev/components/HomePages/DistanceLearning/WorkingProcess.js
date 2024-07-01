import React from "react";
import Image from "next/image";

import workingProcessImg3 from "@/public/images/working-process3.jpg";
import shapeImg15 from "@/public/images/shape/shape15.png";

const WorkingProcess = () => {
  return (
    <div className="working-process-area bg-1d2b53">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 col-md-12">
            <div className="working-process-content style-two">
              <span className="sub-title">Registration Process</span>
              <h2 className="nunito-font">
                Dedicated to help anything people’s needs
              </h2>
              <ul className="working-process-list">
                <li data-aos="fade-up" data-aos-duration="800">
                  <div className="number">1</div>
                  <h3>Select Suitable Course</h3>
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
                  <h3>Payment Information</h3>
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
                  <h3>Register Now</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    est non feugiat sagittis, donec.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="working-process-image style-two bg2">
              <Image src={workingProcessImg3} alt="working-process" />
            </div>
          </div>
        </div>
      </div>

      <div className="shape15">
        <Image src={shapeImg15} alt="shape" />
      </div>
    </div>
  );
};

export default WorkingProcess;
