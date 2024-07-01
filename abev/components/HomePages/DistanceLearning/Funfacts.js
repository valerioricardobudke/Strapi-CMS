import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import Image from "next/image";

import videoImg from "@/public/images/video.jpg";
import shape15 from "@/public/images/shape/shape15.png";
import shape16 from "@/public/images/shape/shape16.png";

const Funfacts = () => {
  // if toggler is updated when lightbox is closed it will open it
  // if toggler is updated when lightbox is opened it will close it
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=bk7McNUjWgw"]}
      />

      <div className="funfacts-area bg-fff9ee pt-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title yellow-color">Distance Learning</span>
            <h2 className="nunito-font">
              Flexible study at your own pace to your own needs
            </h2>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-4 col-sm-4 col-6"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="single-funfacts-item">
                <div className="icon">
                  <i className="flaticon-employee"></i>
                </div>
                <h3>14,500</h3>
                <p>Video Courses</p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-4 col-sm-4 col-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <div className="single-funfacts-item">
                <div className="icon">
                  <i className="flaticon-projects"></i>
                </div>
                <h3>3,527</h3>
                <p>Enrolled Learners</p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-4 col-sm-4 col-6"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <div className="single-funfacts-item">
                <div className="icon">
                  <i className="flaticon-rating"></i>
                </div>
                <h3>100%</h3>
                <p>Satisfaction Rate</p>
              </div>
            </div>
          </div>

          <div
            className="video-box"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <Image src={videoImg} alt="video" />
            <div
              onClick={ () => setToggler(!toggler) }
              className="video-btn popup-youtube"
            >
              <i className="flaticon-play"></i>
            </div>
            <div className="shape15">
              <Image src={shape15} alt="shape" />
            </div>
            <div className="shape16">
              <Image src={shape16} alt="shape" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funfacts;
