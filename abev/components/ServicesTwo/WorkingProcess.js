import React from "react";
import Image from "next/image";

import workingProcessImg from "@/public/images/working-process.jpg";

const WorkingProcess = () => {
  return (
    <div className="working-process-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="working-process-content">
              <span className="sub-title">Our Working Process</span>
              <h2>Dedicated to help anything people’s needs</h2>
              <ul className="working-process-list">
                <li data-aos="fade-up" data-aos-duration="800">
                  <div className="number">1</div>
                  <h3>Analysis & Research</h3>
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
                  <h3>Define Your Goals</h3>
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
                  <h3>Monitor the Results</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    est non feugiat sagittis, donec.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="working-process-image bg1">
              <Image src={workingProcessImg} alt="working-process" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;
