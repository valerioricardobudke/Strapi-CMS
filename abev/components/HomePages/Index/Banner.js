import React from "react";
import Image from "next/image";
import Link from "next/link";

import shapeImg1 from "@/public/images/shape/shape1.png";
import shapeImg3 from "@/public/images/shape/shape3.png";

import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const Banner = () => {
  const [banner, setBanner] = React.useState();
  React.useEffect(() => {
    const getBanner = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/it-startup-banner?populate=*`
      );
      setBanner(response.data);
    };
    getBanner();
  }, []);

  return (
    <>
      {banner && (
        <div className="it-startup-banner-area">
          <div className="container">
            <div className="row align-items-center m-0">
              <div className="col-lg-6 col-md-12 p-0">
                <div className="it-startup-banner-content">
                  <h1>{banner.data.attributes.title}</h1>
                  <p>{banner.data.attributes.shortDescription}</p>
                  <Link
                    href={banner.data.attributes.btnLink}
                    className="btn-style-one red-light-color"
                  >
                    {banner.data.attributes.btnText}{" "}
                    <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 p-0">
                <div className="it-startup-banner-image" data-aos="fade-up">
                  <img
                    src={banner.data.attributes.image.data.attributes.url}
                    alt={
                      banner.data.attributes.image.data.attributes
                        .alternativeText
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Shape Images */}
          <div className="shape1">
            <Image src={shapeImg1} alt="shape" />
          </div>
          <div className="shape2">
            <img
              src={banner.data.attributes.shapeImg.data.attributes.url}
              alt={
                banner.data.attributes.shapeImg.data.attributes.alternativeText
              }
            />
          </div>
          <div className="shape3">
            <Image src={shapeImg3} alt="shape" />
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
