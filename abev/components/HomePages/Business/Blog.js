import React from "react";
import Link from "next/link";
import Image from "next/image";

import blogImg1 from "@/public/images/blog/blog1.jpg";
import blogImg2 from "@/public/images/blog/blog2.jpg";
import blogImg3 from "@/public/images/blog/blog3.jpg";

const Blog = () => {
  return (
    <div className="blog-area pt-100 pb-75">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">Latest News</span>
          <h2>Our latest articles & resources</h2>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-xl-4 col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="single-blog-post">
              <div className="image">
                <Link href="/blogs/blog-details" className="d-block">
                  <Image src={blogImg1} alt="blog-image" />
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
                <h3>
                  <Link href="/blogs/blog-details">
                    How is technology working with new things?
                  </Link>
                </h3>
              </div>
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <div className="single-blog-post">
              <div className="image">
                <Link href="/blogs/blog-details" className="d-block">
                  <Image src={blogImg2} alt="blog-image" />
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
                <h3>
                  <Link href="/blogs/blog-details">
                    Top 10 important tips on IT services & design
                  </Link>
                </h3>
              </div>
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="single-blog-post">
              <div className="image">
                <Link href="/blogs/blog-details" className="d-block">
                  <Image src={blogImg3} alt="blog-image" />
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
                <h3>
                  <Link href="/blogs/blog-details">
                    How our company works in different ways
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
