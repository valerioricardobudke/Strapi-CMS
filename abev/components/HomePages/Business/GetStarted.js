import React from "react";
import Link from "next/link";

const GetStarted = () => {
  return (
    <div className="get-started-area">
      <div className="container">
        <div
          className="get-started-inner-area"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <h2>We&apos;re delivering the best customer experience</h2>
            </div>
            <div className="col-lg-5 col-md-12 text-end">
              <Link href="/contact" className="btn-style-one red-light-color">
                Let&apos;s Get Started <i className="bx bx-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
