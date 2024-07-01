import React from "react";
import Link from "next/link";
import Sidebar from "../Sidebar";
import ReactMarkdown from "react-markdown";

const DetailsContent = ({
  attributes: {
    detailsText,
    date,
    image: {
      data: {
        attributes: { url: imageUrl },
      },
    },
  },
}) => {
  return (
    <div className="blog-details-area ptb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-5 col-md-12"> 
            <div className="left-sidebar">
              <Sidebar />
            </div>
          </div>

          <div className="col-xl-8 col-lg-7 col-md-12">
            <div className="blog-details-desc green-color">
              <div className="post-thumb">
                <img src={imageUrl} alt="blog-details" />
              </div>

              <div className="post-meta">
                <ul>
                  <li>
                    <i className="bx bx-purchase-tag-alt"></i>
                    <Link href="/blogs/blog-tag">
                      Test
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-calendar-check"></i>
                    {date}
                  </li>
                </ul>
              </div>

              <ReactMarkdown>{detailsText}</ReactMarkdown>

              <div className="post-footer">
                <div className="post-tags">
                  <span className="sub">Tags:</span>
                  <ul>
                    <li>
                      <Link href="/blogs/blog-tag">
                        Web
                      </Link>
                    </li>
                    <li>
                      <Link href="/blogs/blog-tag">
                        Dev
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="article-share">
                  <ul className="social">
                    <li>
                      <span>Share:</span>
                    </li>
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
                        href="https://www.twitter.com/"
                        className="twitter"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        className="linkedin"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
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
        </div>
      </div>
    </div>
  );
};

export default DetailsContent;
