import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import resourcesImg1 from "@/public/images/resources/resources1.jpg";
import resourcesImg2 from "@/public/images/resources/resources2.jpg";
import resourcesImg3 from "@/public/images/resources/resources3.jpg";

const Resources = () => {
  return (
    <div className="resources-area pt-100 pb-75 bg-f9f9f9">
      <div className="container">
        <div
          className="section-title text-start"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="nunito-font">Big data resources</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            mauris amet.
          </p>
        </div>

        <Swiper
          spaceBetween={25}
          navigation={true}
          breakpoints={{
            1: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          modules={[Navigation]}
          className="resources-slides"
        >
          <SwiperSlide>
            <div className="single-resources-box">
              <Link
                href="/portfolio/portfolio-details"
                className="image d-block"
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
                <Link href="/portfolio/portfolio-details" className="link-btn">
                  Learn More <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-resources-box">
              <Link
                href="/portfolio/portfolio-details"
                className="image d-block"
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
                <Link href="/portfolio/portfolio-details" className="link-btn">
                  Learn More <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-resources-box">
              <Link
                href="/portfolio/portfolio-details"
                className="image d-block"
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

export default Resources;
