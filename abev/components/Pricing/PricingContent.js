import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const PricingContent = () => {
  const [pricing, setPricing] = React.useState();
  React.useEffect(() => {
    const getPricing = async () => {
      const response = await axios.get(`${baseApiUrl}/api/pricing?populate=*`);
      setPricing(response.data);
    };
    getPricing();
  }, []);

  return (
    <>
      {pricing && (
        <div className="pricing-area bg-f1f5fd pb-75">
          <div className="container">
            <div className="row justify-content-center">
              {pricing.data.attributes.pricingCard.map((price) => (
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  key={price.id}
                >
                  <div className="single-pricing-box">
                    <h3>{price.title}</h3>
                    <p>{price.shortText}</p>

                    <div className="price">
                      {price.price}
                      <span>{price.date}</span>
                    </div>

                    <Link
                      href={price.btnLink}
                      className="btn-style-one light-green-color"
                    >
                      {price.btnText} <i className="bx bx-chevron-right"></i>
                    </Link>

                    <ul className="features-list">
                      <li>
                        <i className="flaticon-draw-check-mark"></i>
                        {price.featuresList1}
                      </li>
                      <li>
                        <i className="flaticon-draw-check-mark"></i>
                        {price.featuresList2}
                      </li>
                      <li>
                        <i className="flaticon-draw-check-mark"></i>
                        {price.featuresList3}
                      </li>
                      <li>
                        <i className="flaticon-draw-check-mark"></i>
                        {price.featuresList4}
                      </li>
                      <li>
                        <i className="flaticon-draw-check-mark"></i>
                        {price.featuresList5}
                      </li>
                      <li>
                        <i className="flaticon-draw-check-mark"></i>
                        {price.featuresList6}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PricingContent;
