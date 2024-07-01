import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const WhatWeDo = () => {
  const [services, setServices] = React.useState();
  React.useEffect(() => {
    const getServices = async () => {
      const response = await axios.get(`${baseApiUrl}/api/services?populate=*`);
      setServices(response.data);
    };
    getServices();
  }, []);

  return (
    <div className="what-we-do-area pt-100 pb-75">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">What We Do</span>
          <h2>Our work is delivered by the best team in the world</h2>
        </div>

        {services && (
          <div className="row">
            {services.data.slice(4, 100).map((service) => (
              <div
                className="col-lg-6 col-md-6 col-sm-6"
                data-aos="fade-up"
                data-aos-duration="800"
                key={service.id}
              >
                <div className="single-what-we-do-box">
                  <div className="icon">
                    <img
                      src={service.attributes.image.data.attributes.url}
                      alt={
                        service.attributes.image.data.attributes.alternativeText
                      }
                    />
                  </div>
                  <h3>{service.attributes.title}</h3>
                  <p>{service.attributes.shortText}</p>
                  <Link
                    href={`/services/${service.attributes.slug}`}
                    className="link-btn"
                  >
                    {service.attributes.btnText}{" "}
                    <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatWeDo;
