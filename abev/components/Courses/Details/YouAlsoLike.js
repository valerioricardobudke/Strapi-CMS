import React from "react";
import Link from "next/link";
import Image from "next/image";

import coursesImg1 from "@/public/images/courses/courses1.jpg";
import coursesImg2 from "@/public/images/courses/courses2.jpg";
import coursesImg3 from "@/public/images/courses/courses3.jpg";

import userImg1 from "@/public/images/user/user3.jpg";
import userImg2 from "@/public/images/user/user3.jpg";
import userImg3 from "@/public/images/user/user3.jpg";

const YouAlsoLike = () => {
  return (
    <div className="courses-area pb-75">
      <div className="container">
        <div className="section-title">
          <h2>
            More Courses You <br />
            Might Like
          </h2>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="single-courses-box">
              <Link href="/courses/courses-details" className="image d-block">
                <Image src={coursesImg1} alt="courses" />
              </Link>
              <div className="content">
                <div className="price">$45</div>
                <h3 className="nunito-font">
                  <Link href="/courses/courses-details">
                    Make a 2D Platformer with State Machines in Unity
                  </Link>
                </h3>
                <ul className="info d-flex align-items-center justify-content-between">
                  <li>
                    <div className="author d-flex align-items-center">
                      <div className="img">
                        <Image src={userImg1} alt="author" />
                      </div>
                      <span>David Allen</span>
                    </div>
                  </li>
                  <li>
                    <span className="status">Popular</span>
                  </li>
                </ul>
              </div>
              <ul className="box-footer d-flex justify-content-between align-items-center">
                <li>
                  <i className="flaticon-video-player"></i> 14 Lessons
                </li>
                <li>
                  <i className="flaticon-team"></i> 125 Students
                </li>
              </ul>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <div className="single-courses-box">
              <Link href="/courses/courses-details" className="image d-block">
                <Image src={coursesImg2} alt="courses" />
              </Link>
              <div className="content">
                <div className="price">$55</div>
                <h3 className="nunito-font">
                  <Link href="/courses/courses-details">
                    Write Like a Boss: Master Your Business Writing Skills
                  </Link>
                </h3>
                <ul className="info d-flex align-items-center justify-content-between">
                  <li>
                    <div className="author d-flex align-items-center">
                      <div className="img">
                        <Image src={userImg2} alt="author" />
                      </div>
                      <span>Alina Smith</span>
                    </div>
                  </li>
                  <li>
                    <span className="status">Popular</span>
                  </li>
                </ul>
              </div>
              <ul className="box-footer d-flex justify-content-between align-items-center">
                <li>
                  <i className="flaticon-video-player"></i> 10 Lessons
                </li>
                <li>
                  <i className="flaticon-team"></i> 50 Students
                </li>
              </ul>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-6"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="single-courses-box">
              <Link href="/courses/courses-details" className="image d-block">
                <Image src={coursesImg3} alt="courses" />
              </Link>
              <div className="content">
                <div className="price">$69</div>
                <h3 className="nunito-font">
                  <Link href="/courses/courses-details">
                    Asynchronous JavaScript: Promises, Callbacks
                  </Link>
                </h3>
                <ul className="info d-flex align-items-center justify-content-between">
                  <li>
                    <div className="author d-flex align-items-center">
                      <div className="img">
                        <Image src={userImg3} alt="author" />
                      </div>
                      <span>James Andy</span>
                    </div>
                  </li>
                  <li>
                    <span className="status">Popular</span>
                  </li>
                </ul>
              </div>
              <ul className="box-footer d-flex justify-content-between align-items-center">
                <li>
                  <i className="flaticon-video-player"></i> 09 Lessons
                </li>
                <li>
                  <i className="flaticon-team"></i> 41 Students
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouAlsoLike;
