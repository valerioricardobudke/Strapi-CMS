import React from "react";
import Image from "next/image";

import appDownloadImg from "@/public/images/app-download.png";
import playStoreImg from "@/public/images/play-store.png";
import appleStoreImg from "@/public/images/apple-store.png";

const AppDownload = () => {
  return (
    <div className="app-download-area pt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="app-download-image">
              <Image
                src={appDownloadImg}
                data-aos="fade-up"
                data-aos-duration="800"
                alt="app-download"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="app-download-content">
              <span
                className="sub-title"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                Download App
              </span>
              <h2
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
              >
                Let&apos;s get your free copy from Apple and Play store
              </h2>
              <div
                className="btn-box"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <a
                  href="https://play.google.com/store/apps"
                  className="playstore-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="img">
                    <Image src={playStoreImg} alt="image" />
                  </div>
                  Get It On <span>Google Play</span>
                </a>
                <a
                  href="https://www.apple.com/itunes/"
                  className="applestore-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="img">
                    <Image src={appleStoreImg} alt="image" />
                  </div>
                  Download on the <span>Apple Store</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default AppDownload;
