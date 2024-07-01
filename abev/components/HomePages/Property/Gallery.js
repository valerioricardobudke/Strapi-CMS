import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import galleryImg1 from "@/public/images/gallery/gallery1.jpg";
import galleryImg2 from "@/public/images/gallery/gallery2.jpg";
import galleryImg3 from "@/public/images/gallery/gallery3.jpg";

const Gallery = () => {
  return (
    <div className="gallery-area pt-100 pb-75 bg-f9f9f9">
      <div className="container">
        <div
          className="section-title text-start"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <span className="sub-title green-color">Photo Gallery</span>
          <h2 className="nunito-font">
            Quality living from the team that cares
          </h2>
        </div>

        <Swiper
          spaceBetween={25}
          navigation={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
          }}
          modules={[Navigation]}
          className="gallery-slides"
        >
          <SwiperSlide>
            <div className="single-gallery-item">
              <div className="d-block popup-image">
                <Image src={galleryImg1} alt="gallery-image" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-gallery-item">
              <div className="d-block popup-image">
                <Image src={galleryImg2} alt="gallery-image" />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-gallery-item">
              <div className="d-block popup-image">
                <Image src={galleryImg3} alt="gallery-image" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Gallery;