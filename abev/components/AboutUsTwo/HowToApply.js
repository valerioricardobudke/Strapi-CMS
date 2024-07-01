import React from "react";
import Link from "next/link";
import Image from "next/image";

import arrowIcon from "@/public/images/arrow.png";

const HowToApply = () => {
  return (
    <div className="how-to-apply-area ptb-100 bg-263238">
      <div className="container">
        <div className="section-title white-color">
          <span className="sub-title">Apply Process</span>
          <h2 className="nunito-font">
            Start saving on your final expense insurance
          </h2>
        </div>
        <div className="apply-arrow">
          <div className="arrow">
            <Image
              src={arrowIcon}
              data-aos="fade-down"
              data-aos-duration="800"
              data-aos-delay="400"
              alt="arrow"
            />
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="single-how-to-apply-box">
                <div className="number">1</div>
                <h3 className="nunito-font">Answer A Few Questions</h3>
                <p>
                  Lorem ipsum dolor sit amet, sagittis consectetur adipiscing
                  elit. Sed est non feugiat sagittis, sagittis donec.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <div className="single-how-to-apply-box">
                <div className="number">2</div>
                <h3 className="nunito-font">Receive Your Free Quotes</h3>
                <p>
                  Lorem ipsum dolor sit amet, sagittis consectetur adipiscing
                  elit. Sed est non feugiat sagittis, sagittis donec.
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="single-how-to-apply-box">
                <div className="number">3</div>
                <h3 className="nunito-font">Purchase Your Policy</h3>
                <p>
                  Lorem ipsum dolor sit amet, sagittis consectetur adipiscing
                  elit. Sed est non feugiat sagittis, sagittis donec.
                </p>
              </div>
            </div>
            <div
              className="col-lg-12 col-md-12 col-sm-12"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <div className="lets-start-box">
                <Link
                  href="/contact"
                  className="btn-style-one dark-green-color"
                >
                  Get Started Now <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToApply;
