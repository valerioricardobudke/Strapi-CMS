import React from "react";
import Link from "next/link";
import Image from "next/image";

import blogImg10 from "@/public/images/blog/blog10.jpg";
import blogImg11 from "@/public/images/blog/blog11.jpg";
import blogImg12 from "@/public/images/blog/blog12.jpg";

const Blog = () => {
  return (
    <div className="blog-area pb-75 pt-100">
      <div className="container">
        <div className="section-title">
          <span className="sub-title green-color">Latest News</span>
          <h2 className="nunito-font">
            Our latest articles & <br />
            resources
          </h2>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-xl-4 col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="single-blog-post-item">
              <div className="image">
                <Link href="/blog-details-3" className="d-block">
                  <Image src={blogImg10} alt="blog-image" />
                </Link>
              </div>
              <div className="content">
                <ul className="meta">
                  <li>
                    <i className="bx bx-purchase-tag-alt"></i>
                    <Link href="/blogs/blog-tag">Technology</Link>
                  </li>
                  <li>
                    <i className="bx bx-calendar-check"></i>
                    25 Nov, 2024
                  </li>
                </ul>
                <h3 className="nunito-font">
                  <Link href="/blog-details-3">
                    What does it mean to be Dental?
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  est non feugiat sagittis.
                </p>
                <Link href="/blog-details-3" className="link-btn">
                  Read More <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <div className="single-blog-post-item">
              <div className="image">
                <Link href="/blog-details-3" className="d-block">
                  <Image src={blogImg11} alt="blog-image" />
                </Link>
              </div>
              <div className="content">
                <ul className="meta">
                  <li>
                    <i className="bx bx-purchase-tag-alt"></i>
                    <Link href="/blogs/blog-tag">Design</Link>
                  </li>
                  <li>
                    <i className="bx bx-calendar-check"></i>
                    24 Nov, 2024
                  </li>
                </ul>
                <h3 className="nunito-font">
                  <Link href="/blog-details-3">
                    What is Asherson’s Syndrome?
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  est non feugiat sagittis.
                </p>
                <Link href="/blog-details-3" className="link-btn">
                  Read More <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="single-blog-post-item">
              <div className="image">
                <Link href="/blog-details-3" className="d-block">
                  <Image src={blogImg12} alt="blog-image" />
                </Link>
              </div>
              <div className="content">
                <ul className="meta">
                  <li>
                    <i className="bx bx-purchase-tag-alt"></i>

                    <Link href="/blogs/blog-tag">Startup</Link>
                  </li>
                  <li>
                    <i className="bx bx-calendar-check"></i>
                    23 Nov, 2024
                  </li>
                </ul>
                <h3 className="nunito-font">
                  <Link href="/blog-details-3">
                    Using skincare research to explore
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  est non feugiat sagittis.
                </p>
                <Link href="/blog-details-3" className="link-btn">
                  Read More <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
