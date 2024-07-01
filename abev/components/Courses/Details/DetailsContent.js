import React from "react";
import DetailsSidebar from "./DetailsSidebar";
import DetailsTabs from "./DetailsTabs";

const DetailsContent = () => {
  return (
    <div className="courses-details-area ptb-100">
      <div className="container">
        <div className="row">
          <DetailsTabs />
          <DetailsSidebar />
        </div>
      </div>
    </div>
  );
};

export default DetailsContent;
