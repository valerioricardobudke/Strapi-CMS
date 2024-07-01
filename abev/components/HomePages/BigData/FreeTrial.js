import React from "react";
import Link from "next/link";
import Image from "next/image";

import shapeImg12 from "@/public/images/shape/shape12.png";
import shapeImg13 from "@/public/images/shape/shape13.png";

const FreeTrial = () => {
  return (
    <div className="free-trial-area">
      <div className="container">
        <div className="free-trial-inner">
          <h2
            className="nunito-font"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Get connected with Abev platform
          </h2>
          <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed
            tortor, cursus dui vulputate sit elit. Elementum et a, bibendum mi
            nisl. Sed facilisis sed turpis gravida faucibus tortor sed at.
          </p>
          <div
            className="btn-box"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <Link href="/contact" className="btn-style-one green-color2">
              Free Trial Now <i className="bx bx-chevron-right"></i>
            </Link>
            <Link href="/contact" className="btn-style-one white-color">
              Watch Demo <i className="bx bx-chevron-right"></i>
            </Link>
          </div>

          {/* Shape Images */}
          <div className="shape12">
            <Image src={shapeImg12} alt="shape" />
          </div>
          <div className="shape13">
            <Image src={shapeImg13} alt="shape" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;
