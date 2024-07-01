import React from "react";
import Link from "next/link";
import Image from "next/image";

import resourcesImg1 from "@/public/images/resources/resources1.jpg";
import resourcesImg2 from "@/public/images/resources/resources2.jpg";
import resourcesImg3 from "@/public/images/resources/resources3.jpg";
import resourcesImg4 from "@/public/images/resources/resources4.jpg";
import resourcesImg5 from "@/public/images/resources/resources5.jpg";
import resourcesImg6 from "@/public/images/resources/resources6.jpg";

const PortfolioStyle2 = () => {
  return (
    <>
      <div className="case-studies-area pb-100 bg-f1f5fd">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="single-resources-box red-light-color">
                <Link
                  href="/portfolio/portfolio-details"
                  className="d-block image"
                >
                  <Image src={resourcesImg1} alt="resources" />
                </Link>
                <div className="content">
                  <h3 className="nunito-font">
                    <Link href="/portfolio/portfolio-details">
                      Free Data Sources For Your Next Project
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Consectetur mauris amet, placerat fames orci elementum
                    adipiscing consectetur sagittis.
                  </p>
                  <Link
                    href="/portfolio/portfolio-details"
                    className="link-btn"
                  >
                    Learn More <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <div className="single-resources-box red-light-color">
                <Link
                  href="/portfolio/portfolio-details"
                  className="d-block image"
                >
                  <Image src={resourcesImg2} alt="resources" />
                </Link>
                <div className="content">
                  <h3 className="nunito-font">
                    <Link href="/portfolio/portfolio-details">
                      Gaining New Insights from Data Lakes
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Consectetur mauris amet, placerat fames orci elementum
                    adipiscing consectetur sagittis.
                  </p>
                  <Link
                    href="/portfolio/portfolio-details"
                    className="link-btn"
                  >
                    Learn More <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="single-resources-box red-light-color">
                <Link
                  href="/portfolio/portfolio-details"
                  className="d-block image"
                >
                  <Image src={resourcesImg3} alt="resources" />
                </Link>
                <div className="content">
                  <h3 className="nunito-font">
                    <Link href="/portfolio/portfolio-details">
                      Top 10 Data Resources Online in 2022
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Consectetur mauris amet, placerat fames orci elementum
                    adipiscing consectetur sagittis.
                  </p>
                  <Link
                    href="/portfolio/portfolio-details"
                    className="link-btn"
                  >
                    Learn More <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <div className="single-resources-box red-light-color">
                <Link
                  href="/portfolio/portfolio-details"
                  className="d-block image"
                >
                  <Image src={resourcesImg4} alt="resources" />
                </Link>
                <div className="content">
                  <h3 className="nunito-font">
                    <Link href="/portfolio/portfolio-details">
                      Top 10 important tips on IT Services & Design
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Consectetur mauris amet, placerat fames orci elementum
                    adipiscing consectetur sagittis.
                  </p>
                  <Link
                    href="/portfolio/portfolio-details"
                    className="link-btn"
                  >
                    Learn More <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="single-resources-box red-light-color">
                <Link
                  href="/portfolio/portfolio-details"
                  className="d-block image"
                >
                  <Image src={resourcesImg5} alt="resources" />
                </Link>
                <div className="content">
                  <h3 className="nunito-font">
                    <Link href="/portfolio/portfolio-details">
                      9 apps to help people sharpen their Coding
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Consectetur mauris amet, placerat fames orci elementum
                    adipiscing consectetur sagittis.
                  </p>
                  <Link
                    href="/portfolio/portfolio-details"
                    className="link-btn"
                  >
                    Learn More <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <div className="single-resources-box red-light-color">
                <Link
                  href="/portfolio/portfolio-details"
                  className="d-block image"
                >
                  <Image src={resourcesImg6} alt="resources" />
                </Link>
                <div className="content">
                  <h3 className="nunito-font">
                    <Link href="/portfolio/portfolio-details">
                      Bootstrap 5 is open source software you can use
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Consectetur mauris amet, placerat fames orci elementum
                    adipiscing consectetur sagittis.
                  </p>
                  <Link
                    href="/portfolio/portfolio-details"
                    className="link-btn"
                  >
                    Learn More <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-12 col-md-12"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="pagination-area">
                <div className="nav-links">
                  <Link href="#" className="prev page-numbers">
                    prev
                  </Link>
                  <span className="page-numbers current">1</span>
                  <Link href="#" className="page-numbers">
                    2
                  </Link>
                  <Link href="#" className="page-numbers">
                    3
                  </Link>
                  <Link href="#" className="next page-numbers">
                    next
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioStyle2;
