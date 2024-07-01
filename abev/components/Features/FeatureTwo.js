import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const FeatureTwo = () => {
  // Send & Receive Payments API
  const [receivePayment, setReceivePayment] = React.useState();
  React.useEffect(() => {
    const getReceivePayment = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/app-send-and-receive-payment?populate=*`
      );
      setReceivePayment(response.data);
    };
    getReceivePayment();
  }, []);

  // minimal-dashboard API
  const [minimalDashboard, setMinimalDashboard] = React.useState();
  React.useEffect(() => {
    const getMinimalDashboard = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/app-minimal-dashboard?populate=*`
      );
      setMinimalDashboard(response.data);
    };
    getMinimalDashboard();
  }, []);

  return (
    <>
      <div className="overview-area ptb-100 with-top-border">
        <div className="container">
          {receivePayment && (
            <div className="overview-item">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12 overview-image style-one">
                  <div className="img">
                    <img
                      src={
                        receivePayment.data.attributes.image.data.attributes.url
                      }
                      alt={
                        receivePayment.data.attributes.image.data.attributes
                          .alternativeText
                      }
                    />
                  </div>
                  <div className="img">
                    <img
                      src={
                        receivePayment.data.attributes.image2.data.attributes
                          .url
                      }
                      alt={
                        receivePayment.data.attributes.image2.data.attributes
                          .alternativeText
                      }
                    />
                  </div>
                </div>

                <div className="col-lg-5 col-md-12 overview-content">
                  <span className="sub-title">
                    {receivePayment.data.attributes.subTitle}
                  </span>

                  <h2>{receivePayment.data.attributes.title}</h2>

                  <ul className="overview-list">
                    {receivePayment.data.attributes.lists.map((list) => (
                      <li
                        data-aos="fade-up"
                        data-aos-duration="800"
                        key={list.id}
                      >
                        <i className="flaticon-draw-check-mark"></i>
                        {list.text}
                      </li>
                    ))}
                  </ul>

                  <div
                    className="btn-box"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="300"
                  >
                    <Link
                      href={receivePayment.data.attributes.btnLink}
                      className="btn-style-one light-green-color"
                    >
                      {receivePayment.data.attributes.btnText}{" "}
                      <i className="bx bx-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {minimalDashboard && (
            <div className="overview-item">
              <div className="row align-items-center">
                <div className="col-lg-5 col-md-12 overview-content">
                  <span className="sub-title">
                    {minimalDashboard.data.attributes.subTitle}
                  </span>

                  <h2>{minimalDashboard.data.attributes.title}</h2>

                  <ul className="overview-list">
                    {minimalDashboard.data.attributes.lists.map((list) => (
                      <li
                        data-aos="fade-up"
                        data-aos-duration="800"
                        key={list.id}
                      >
                        <i className="flaticon-draw-check-mark"></i>
                        {list.text}
                      </li>
                    ))}
                  </ul>

                  <div
                    className="btn-box"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="300"
                  >
                    <Link
                      href={minimalDashboard.data.attributes.btnLink}
                      className="btn-style-one light-green-color"
                    >
                      {minimalDashboard.data.attributes.btnText}{" "}
                      <i className="bx bx-chevron-right"></i>
                    </Link>
                  </div>
                </div>

                <div className="col-lg-7 col-md-12 overview-image style-two">
                  <div className="img">
                    <img
                      src={
                        minimalDashboard.data.attributes.image.data.attributes
                          .url
                      }
                      alt={
                        minimalDashboard.data.attributes.image.data.attributes
                          .alternativeText
                      }
                    />
                  </div>
                  <div className="img">
                    <img
                      src={
                        minimalDashboard.data.attributes.image2.data.attributes
                          .url
                      }
                      alt={
                        minimalDashboard.data.attributes.image2.data.attributes
                          .alternativeText
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FeatureTwo;
