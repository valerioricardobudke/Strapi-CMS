import React from "react";
import Image from "next/image";
import Link from "next/link";

import blogImg1 from "@/public/images/blog/blog1.jpg";
import blogImg2 from "@/public/images/blog/blog2.jpg";
import blogImg3 from "@/public/images/blog/blog3.jpg";
import blogImg4 from "@/public/images/blog/blog4.jpg";
import blogImg5 from "@/public/images/blog/blog5.jpg";
import blogImg6 from "@/public/images/blog/blog6.jpg";
import blogImg7 from "@/public/images/blog/blog7.jpg";
import blogImg8 from "@/public/images/blog/blog8.jpg";
import blogImg9 from "@/public/images/blog/blog9.jpg";

const CategoriePost = () => {
  return (
    <div className="blog-area ptb-100">
      <div className="container">
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

          <div
            className="col-xl-4 col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="single-blog-post">
              <div className="image">
                <Link href="/blogs/blog-details" className="d-block">
                  <Image src={blogImg4} alt="blog-image" />
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
                    22 Nov, 2024
                  </li>
                </ul>
                <h3>
                  <Link href="/blogs/blog-details">
                    Giving kids and teens a safer experience online
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
                  <Image src={blogImg5} alt="blog-image" />
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
                    21 Nov, 2024
                  </li>
                </ul>
                <h3>
                  <Link href="/blogs/blog-details">
                    9 apps to help people sharpen their coding skills
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
                  <Image src={blogImg6} alt="blog-image" />
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
                    20 Nov, 2024
                  </li>
                </ul>
                <h3>
                  <Link href="/blogs/blog-details">
                    A new model for inclusive computer science
                  </Link>
                </h3>
              </div>
            </div>
          </div>

          <div
            className="col-xl-4 col-lg-6 col-md-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="single-blog-post">
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
                    19 Nov, 2024
                  </li>
                </ul>
                <h3>
                  <Link href="/blogs/blog-details">
                    How sellers win when housing inventory is low
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
                    18 Nov, 2024
                  </li>
                </ul>
                <h3>
                  <Link href="/blogs/blog-details">
                    Branding involves developing strategy to create point
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
                    17 Nov, 2024
                  </li>
                </ul>
                <h3>
                  <Link href="/blogs/blog-details">
                    Bootstrap 5 is open source software you can use
                  </Link>
                </h3>
              </div>
            </div>
          </div>

          <div
            className="col-xl-12 col-lg-12 col-md-12"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <div className="pagination-area">
              <div className="nav-links">
                <Link href="#" className="prev page-numbers">
                  prev
                </Link>
                <span className="page-numbers current">1</span>
                <Link href="#" className="page-numbers">
                  2
                </Link>
                <Link href="#" className="page-numbers">
                  3
                </Link>
                <Link href="#" className="next page-numbers">
                  next
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriePost;
