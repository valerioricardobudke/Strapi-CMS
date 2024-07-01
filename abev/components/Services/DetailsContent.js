import React from "react";
import ReactMarkdown from "react-markdown";

const DetailsContent = ({ attributes: { detailsText } }) => {
  return (
    <div className="services-details-area ptb-100">
      <div className="container">
        <div className="services-details-desc">
          <ReactMarkdown>{detailsText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default DetailsContent;
