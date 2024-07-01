import React from "react";
import ReactMarkdown from "react-markdown";

const PortfolioDetailsContent = ({
  attributes: {
    detailsText,
    image: {
      data: {
        attributes: { url: imageUrl },
      },
    },
    liveDemoText,
    liveDemoLink,
  },
}) => {
  return (
    <>
      <div className="portfolio-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="portfolio-details-image">
                <div className="row">
                  <div className="col-lg-12 col-md-6 col-sm-6">
                    <div className="image">
                      <img src={imageUrl} alt="portfolio-details" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="portfolio-details-desc pl-15">
                <ReactMarkdown>{detailsText}</ReactMarkdown>

                <a
                  href={liveDemoLink}
                  target="_blank"
                  className="btn-style-one red-light-color"
                  rel="noreferrer"
                >
                  {liveDemoText} <i className="bx bx-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetailsContent;
