import React from "react";
import Link from "next/link";
import Image from "next/image";

import blogImg7 from "@/public/images/blog/blog7.jpg";
import blogImg8 from "@/public/images/blog/blog8.jpg";
import blogImg9 from "@/public/images/blog/blog9.jpg";

const Blog = () => {
  return (
    <div className="blog-area pb-75 pt-100">
      <div className="container">
        <div className="section-title">
          <span className="sub-title yellow-color">Our Publication</span>
          <h2 className="nunito-font">Latest News & Articles</h2>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-xl-4 col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="single-blog-post-item yellow-color">
              <div className="image">
                <Link href="/blogs/blog-details" className="d-block">
                  <Image src={blogImg7} alt="blog-image" />
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
                  <Link href="/blogs/blog-details">
                    Giving kids and teens a safer experience online
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  est non feugiat sagittis.
                </p>
                <Link href="/blogs/blog-details" className="link-btn">
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
            <div className="single-blog-post-item yellow-color">
              <div className="image">
                <Link href="/blogs/blog-details" className="d-block">
                  <Image src={blogImg8} alt="blog-image" />
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
                  <Link href="/blogs/blog-details">
                    9 apps to help people sharpen their coding skills
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  est non feugiat sagittis.
                </p>
                <Link href="/blogs/blog-details" className="link-btn">
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
            <div className="single-blog-post-item yellow-color">
              <div className="image">
                <Link href="/blogs/blog-details" className="d-block">
                  <Image src={blogImg9} alt="blog-image" />
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
                  <Link href="/blogs/blog-details">
                    A new model for inclusive computer science education
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  est non feugiat sagittis.
                </p>
                <Link href="/blogs/blog-details" className="link-btn">
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
