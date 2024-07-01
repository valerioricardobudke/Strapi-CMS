import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import userImg1 from "@/public/images/user/user1.jpg";
import userImg2 from "@/public/images/user/user2.jpg";
import userImg3 from "@/public/images/user/user3.jpg";
import userImg4 from "@/public/images/user/user4.jpg";

const DetailsTabs = () => {
  return (
    <div className="col-lg-8 col-md-12">
      <div className="courses-details-desc">
        <Tabs>
          <TabList>
            <Tab>Overview</Tab>
            <Tab>Curriculum</Tab>
            <Tab>Reviews</Tab>
          </TabList>

          <TabPanel>
            <div className="courses-overview">
              <h3>Course Description</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis consectetur adipiscing
                elit.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <a href="#">incididunt</a> ut labore et dolore
                magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                commodo viverra maecenas accumsan lacus vel facilisis
                consectetur adipiscing elit.
              </p>
              <h3>Certification</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et <strong>dolore</strong>{" "}
                magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                commodo viverra maecenas accumsan lacus vel facilisis
                consectetur adipiscing elit.
              </p>
              <h3>Who this course is for</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis consectetur adipiscing
                elit.
              </p>
              <h3>What you&apos;ll learn in this course:</h3>
              <p>
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis consectetur adipiscing
                elit.
              </p>
              <ul>
                <li>a console</li>
                <li>
                  Two Joy-Con controllers that are <a href="#">detachable</a>
                </li>
                <li>
                  A grip that enables you to combine them into a single gamepad
                  for play on the
                </li>
                <li>
                  A dock which you can use to <strong>connect</strong> your
                  console to the television for traditional gameplay
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis consectetur adipiscing
                elit.
              </p>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="courses-curriculum">
              <h3>Python Introduction</h3>
              <ul>
                <li>
                  <Link
                    href="/courses/courses-details"
                    className="d-flex justify-content-between align-items-center"
                  >
                    <span className="courses-name">Python Introduction</span>
                    <div className="courses-meta">
                      <span className="questions">5 questions</span>
                      <span className="duration">01 Hour</span>
                      <span className="status">Preview</span>
                    </div>
                  </Link>
                </li>
              </ul>
              <h3>Stepping into the World of Python</h3>
              <ul>
                <li>
                  <Link
                    href="/courses/courses-details"
                    className="d-flex justify-content-between align-items-center"
                  >
                    <span className="courses-name">NumPy Introduction</span>
                    <div className="courses-meta">
                      <span className="duration">15 Min</span>
                      <span className="status locked">
                        <i className="bx bx-lock-alt"></i>
                      </span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses/courses-details"
                    className="d-flex justify-content-between align-items-center"
                  >
                    <span className="courses-name">NumPy Getting Started</span>
                    <div className="courses-meta">
                      <span className="duration">30 Min</span>
                      <span className="status locked">
                        <i className="bx bx-lock-alt"></i>
                      </span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses/courses-details"
                    className="d-flex justify-content-between align-items-center"
                  >
                    <span className="courses-name">NumPy Creating Arrays</span>
                    <div className="courses-meta">
                      <span className="duration">45 Min</span>
                      <span className="status locked">
                        <i className="bx bx-lock-alt"></i>
                      </span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses/courses-details"
                    className="d-flex justify-content-between align-items-center"
                  >
                    <span className="courses-name">NumPy Array Indexing</span>
                    <div className="courses-meta">
                      <span className="questions">4 questions</span>
                      <span className="duration">1 Hour</span>
                      <span className="status locked">
                        <i className="bx bx-lock-alt"></i>
                      </span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses/courses-details"
                    className="d-flex justify-content-between align-items-center"
                  >
                    <span className="courses-name">NumPy Array Slicing</span>
                    <div className="courses-meta">
                      <span className="duration">1.5 Hour</span>
                      <span className="status locked">
                        <i className="bx bx-lock-alt"></i>
                      </span>
                    </div>
                  </Link>
                </li>
              </ul>
              <h3>Python MySQL</h3>
              <ul>
                <li>
                  <Link
                    href="/courses/courses-details"
                    className="d-flex justify-content-between align-items-center"
                  >
                    <span className="courses-name">Python MySQL</span>
                    <div className="courses-meta">
                      <span className="duration">01 Hour</span>
                      <span className="status locked">
                        <i className="bx bx-lock-alt"></i>
                      </span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses/courses-details"
                    className="d-flex justify-content-between align-items-center"
                  >
                    <span className="courses-name">
                      Python MySQL Create Database
                    </span>
                    <div className="courses-meta">
                      <span className="questions">3 questions</span>
                      <span className="duration">1.1 Hour</span>
                      <span className="status locked">
                        <i className="bx bx-lock-alt"></i>
                      </span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses/courses-details"
                    className="d-flex justify-content-between align-items-center"
                  >
                    <span className="courses-name">
                      Python MySQL Create Table
                    </span>
                    <div className="courses-meta">
                      <span className="duration">1.5 Hour</span>
                      <span className="status locked">
                        <i className="bx bx-lock-alt"></i>
                      </span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="courses-reviews">
              <h3>Course Rating</h3>
              <div className="rating">
                <span className="ph-star checked"></span>
                <span className="ph-star checked"></span>
                <span className="ph-star checked"></span>
                <span className="ph-star checked"></span>
                <span className="ph-star"></span>
              </div>
              <div className="rating-count">
                <span>4.1 average based on 4 reviews.</span>
              </div>
              <div className="row">
                <div className="side">
                  <div>5 star</div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-5"></div>
                  </div>
                </div>
                <div className="side right">
                  <div>02</div>
                </div>
                <div className="side">
                  <div>4 star</div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-4"></div>
                  </div>
                </div>
                <div className="side right">
                  <div>03</div>
                </div>
                <div className="side">
                  <div>3 star</div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-3"></div>
                  </div>
                </div>
                <div className="side right">
                  <div>04</div>
                </div>
                <div className="side">
                  <div>2 star</div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-2"></div>
                  </div>
                </div>
                <div className="side right">
                  <div>05</div>
                </div>
                <div className="side">
                  <div>1 star</div>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className="bar-1"></div>
                  </div>
                </div>
                <div className="side right">
                  <div>00</div>
                </div>
              </div>
            </div>

            <div className="courses-review-comments">
              <h3>3 Reviews</h3>
              <div className="user-review">
                <div className="img">
                  <Image src={userImg1} alt="image" />
                </div>
                <div className="review-rating">
                  <div className="review-stars">
                    <i className="ph-star checked"></i>
                    <i className="ph-star checked"></i>
                    <i className="ph-star checked"></i>
                    <i className="ph-star checked"></i>
                    <i className="ph-star checked"></i>
                  </div>
                </div>
                <span className="d-block sub-comment">James Anderson</span>
                <p>
                  Very well built theme, couldn&apos;t be happier with it.
                  Can&apos;t wait for future updates to see what else they add
                  in.
                </p>
              </div>
              <div className="user-review">
                <div className="img">
                  <Image src={userImg2} alt="image" />
                </div>
                <div className="review-rating">
                  <div className="review-stars">
                    <i className="ph-star checked"></i>
                    <i className="ph-star checked"></i>
                    <i className="ph-star checked"></i>
                    <i className="ph-star"></i>
                    <i className="ph-star"></i>
                  </div>
                </div>
                <span className="d-block sub-comment">Sarah Taylor</span>
                <p>
                  Was really easy to implement and they quickly answer my
                  additional questions!
                </p>
              </div>
              <div className="user-review">
                <div className="img">
                  <Image src={userImg3} alt="image" />
                </div>
                <div className="review-rating">
                  <div className="review-stars">
                    <i className="ph-star checked"></i>
                    <i className="ph-star checked"></i>
                    <i className="ph-star checked"></i>
                    <i className="ph-star checked"></i>
                    <i className="ph-star checked"></i>
                  </div>
                </div>
                <span className="d-block sub-comment">David Warner</span>
                <p>
                  Stunning design, very dedicated crew who welcome new ideas
                  suggested by customers, nice support.
                </p>
              </div>
              <div className="user-review">
                <div className="img">
                  <Image src={userImg4} alt="image" />
                </div>
                <div className="review-rating">
                  <div className="review-stars">
                    <i className="ph-star checked"></i>
                    <i className="ph-star checked"></i>
                    <i className="ph-star checked"></i>
                    <i className="ph-star checked"></i>
                    <i className="ph-star"></i>
                  </div>
                </div>
                <span className="d-block sub-comment">King Kong</span>
                <p>
                  Stunning design, very dedicated crew who welcome new ideas
                  suggested by customers, nice support.
                </p>
              </div>
            </div>

            <div className="review-form-wrapper">
              <h3>Add a review</h3>
              <p className="comment-notes">
                Your email address will not be published. Required fields are
                marked <span>*</span>
              </p>
              <form>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="rating">
                      <input type="radio" id="star5" name="rating" value="5" />
                      <label htmlFor="star5"></label>
                      <input type="radio" id="star4" name="rating" value="4" />
                      <label htmlFor="star4"></label>
                      <input type="radio" id="star3" name="rating" value="3" />
                      <label htmlFor="star3"></label>
                      <input type="radio" id="star2" name="rating" value="2" />
                      <label htmlFor="star2"></label>
                      <input type="radio" id="star1" name="rating" value="1" />
                      <label htmlFor="star1"></label>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name *"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email *"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        placeholder="Your review"
                        className="form-control"
                        cols="30"
                        rows="6"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="checkme"
                      />
                      <label className="form-check-label" htmlFor="checkme">
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <button type="submit">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default DetailsTabs;
