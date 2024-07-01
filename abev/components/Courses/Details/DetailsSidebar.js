import React from "react";
import Link from "next/link";

const DetailsSidebar = () => {
  return (
    <div className="col-lg-4 col-md-12">
      <div className="courses-details-info">
        <ul className="info">
          <li className="price">
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="bx bx-purchase-tag-alt"></i> Price
              </span>
              Free
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="bx bx-up-arrow-circle"></i> Course Level
              </span>
              Intermediate
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="bx bx-time"></i> Duration
              </span>
              7 weeks
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="bx bx-laptop"></i> Lessons
              </span>
              25
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="bx bx-dots-horizontal-rounded"></i> Quizzes
              </span>
              5
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="bx bx-sun"></i> Certificate
              </span>
              Yes
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="bx bx-globe"></i> Language
              </span>
              English
            </div>
          </li>
          <li>
            <div className="d-flex justify-content-between align-items-center">
              <span>
                <i className="bx bx-lock-alt"></i> Access
              </span>
              Lifetime
            </div>
          </li>
        </ul>
        
        <div className="btn-box">
          <button
            type="submit"
            className="btn-style-one yellow-color d-block w-100"
          >
            Add to Cart
          </button>

          <Link href="/authentication" className="btn-style-one crimson-light-color">
            Buy Now
          </Link>
        </div>

        <div className="courses-share">
          <div className="share-info">
            <span>
              Share This Course <i className="bx bx-share-alt"></i>
            </span>
            <ul className="social-link">
              <li>
                <a
                  href="https://www.facebook.com/"
                  className="facebook"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  className="twitter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  className="linkedin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  className="instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bx bxl-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSidebar;
