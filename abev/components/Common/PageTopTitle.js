import React from "react";

const PageTopTitle = ({ subTitle, title }) => {
  return (
    <div className="page-title-area">
      <div className="container">
        <div className="page-title-content">
          <span className="sub-title">{subTitle}</span>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default PageTopTitle;
