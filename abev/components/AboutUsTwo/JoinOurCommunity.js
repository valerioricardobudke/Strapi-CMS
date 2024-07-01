import React from "react";
import Link from "next/link";
import Image from "next/image";

import joinOutCommunity from "@/public/images/join-out-community.png";

const JoinOurCommunity = () => {
  return (
    <div className="join-our-community-area bg-e8fcff ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 col-md-12"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="join-our-community-image">
              <Image src={joinOutCommunity} alt="join-out-community" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="join-our-community-content">
              <span
                className="sub-title"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                Join Our Community
              </span>
              <h2
                className="nunito-font"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                Leading provider of life Insurance solutions
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                proin <br />
                lectus in aliquam orci mollis ornare nec commodo.
              </p>
              <div
                className="btn-box"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                <Link href="/contact" className="btn-style-one crimson-color">
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

export default JoinOurCommunity;
