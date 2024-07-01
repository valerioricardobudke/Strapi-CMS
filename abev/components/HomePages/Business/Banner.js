import React from "react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="business-banner-area">
      <div className="container-fluid">
        <div className="business-banner-content">
          <h1 data-aos="fade-up" data-aos-duration="800">
            Ready to take your business growth to the next level?
          </h1>
          <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
            Velit hendrerit sit auctor tempor sem. Congue mi tempor condimentum
            felis arcu, non cursus. Nulla pharetra porttitor sed platea arcu et
            leo odio.
          </p>
          <div
            className="btn-box"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <Link href="/contact" className="btn-style-one red-light-color">
              Get Started Now <i className="bx bx-chevron-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
