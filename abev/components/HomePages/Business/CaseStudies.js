import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import caseStudiesImg1 from "@/public/images/case-studies/case-studies1.jpg";
import caseStudiesImg2 from "@/public/images/case-studies/case-studies2.jpg";
import caseStudiesImg3 from "@/public/images/case-studies/case-studies3.jpg";
import caseStudiesImg4 from "@/public/images/case-studies/case-studies4.jpg";

const CaseStudies = () => {
  return (
    <div className="case-studies-area with-top-border pt-100 bg-color">
      <div className="container">
        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <span className="sub-title">Case Studies</span>
          <h2>We’ve done lot’s of work, Let’s check some</h2>
        </div>
      </div>

      <div className="container-fluid">
        <Swiper
          pagination={{
            clickable: true,
          }}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination]}
          className="case-studies-slides"
        >
          <SwiperSlide>
            <div className="single-case-studies-box">
              <Link
                href="/portfolio/portfolio-details"
                className="d-block image"
              >
                <Image src={caseStudiesImg1} alt="case-studies-image" />
              </Link>
              <div className="content">
                <div className="icon">
                  <i className="flaticon-startup"></i>
                </div>
                <h3>
                  <Link
                    href="/portfolio/portfolio-details"
                    className="link-btn"
                  >
                    Business Startup
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Sed
                  est non feugiat sagi ttis donec dolor sit.
                </p>
                <Link href="/portfolio/portfolio-details" className="link-btn">
                  Learn More <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-case-studies-box">
              <Link
                href="/portfolio/portfolio-details"
                className="d-block image"
              >
                <Image src={caseStudiesImg2} alt="case-studies-image" />
              </Link>
              <div className="content">
                <div className="icon">
                  <i className="flaticon-consulting"></i>
                </div>
                <h3>
                  <Link
                    href="/portfolio/portfolio-details"
                    className="link-btn"
                  >
                    Finance Consulting
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Sed
                  est non feugiat sagi ttis donec dolor sit.
                </p>
                <Link href="/portfolio/portfolio-details" className="link-btn">
                  Learn More <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-case-studies-box">
              <Link
                href="/portfolio/portfolio-details"
                className="d-block image"
              >
                <Image src={caseStudiesImg3} alt="case-studies-image" />
              </Link>
              <div className="content">
                <div className="icon">
                  <i className="flaticon-personal-wealth"></i>
                </div>
                <h3>
                  <Link href="/portfolio-details" className="link-btn">
                    Wealth Management
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Sed
                  est non feugiat sagi ttis donec dolor sit.
                </p>
                <Link href="/portfolio/portfolio-details" className="link-btn">
                  Learn More <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-case-studies-box">
              <Link
                href="/portfolio/portfolio-details"
                className="d-block image"
              >
                <Image src={caseStudiesImg4} alt="case-studies-image" />
              </Link>
              <div className="content">
                <div className="icon">
                  <i className="flaticon-management"></i>
                </div>
                <h3>
                  <Link href="/portfolio-details" className="link-btn">
                    Business Planning
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Sed
                  est non feugiat sagi ttis donec dolor sit.
                </p>
                <Link href="/portfolio/portfolio-details" className="link-btn">
                  Learn More <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CaseStudies;
