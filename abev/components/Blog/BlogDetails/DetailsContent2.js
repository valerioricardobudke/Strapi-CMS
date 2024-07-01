import React from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../Sidebar";

import blogPreviewImg from "@/public/images/blog/blog3.jpg";

import userImg1 from "@/public/images/user/user1.jpg";
import userImg2 from "@/public/images/user/user2.jpg";
import userImg3 from "@/public/images/user/user3.jpg";
import userImg4 from "@/public/images/user/user4.jpg";

const DetailsContent2 = () => {
  return (
    <div className="blog-details-area ptb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-7 col-md-12">
            <div className="blog-details-desc green-color">
              <div className="post-thumb">
                <Image src={blogPreviewImg} alt="blog-details" />
              </div>
              <div className="post-meta">
                <ul>
                  <li>
                    <i className="bx bx-purchase-tag-alt"></i>
                    <Link href="/blogs/blog-tag">
                      Startup
                    </Link>
                  </li>
                  <li>
                    <i className="bx bx-calendar-check"></i>
                    25 Nov, 2024
                  </li>
                </ul>
              </div>
              <p>
                Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                Neque porro quia non numquam eius modi tempora incidunt ut
                labore et dolore magnam dolor sit amet, consectetur adipisicing.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur{" "}
                <strong>adipisicing</strong> elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea <a href="#">commodo</a> consequat. Duis aute irure
                dolor in reprehenderit in sed quia non numquam eius modi tempora
                incidunt ut labore et dolore magnam aliquam quaerat.
              </p>
              <ol>
                <li>
                  Nunc, mauris ut in vestibulum. Consectetur phasellus ultrices
                  fusce nibh justo, venenatis, amet. Lectus quam in{" "}
                </li>
                <li>
                  Most of the designer are very creative to do something ,
                  mauris ut in vestibulum. Consectetur phasellus ultrices fusce
                  nibh justo, venenatis, amet. Lectus quam in lobortis{" "}
                </li>
                <li>
                  There are two thing is very important in Consectetur phasellus
                  ultrices fusce nibh justo, venenatis, amet. Lectus quam.
                </li>
                <li>
                  Web design and development very creative to do something ,
                  mauris ut in vestibulum. Consectetur phasellus ultrices fusce
                  nibh venenatis, amet to all design and development.
                </li>
              </ol>
              <p>
                Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                Neque porro quia non numquam eius modi tempora incidunt ut
                labore et dolore magnam dolor sit amet, consectetur adipisicing.
              </p>
              <h4>Four major elements that we offer:</h4>
              <p>
                Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                Neque porro quia non numquam eius modi tempora incidunt ut
                labore et dolore magnam dolor sit amet, consectetur adipisicing.
              </p>
              <ul>
                <li>Scientific skills for getting a better result</li>
                <li>Communication skills to getting in touch</li>
                <li>A career overview opportunity available</li>
                <li>A good work environment for work</li>
              </ul>
              <h4>Setting the mood with incense</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in sed quia non numquam eius modi tempora
                incidunt ut labore et dolore magnam aliquam quaerat.
              </p>
              <blockquote className="wp-block-quote">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </blockquote>
              <h4>The rise of marketing and why you need it</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur{" "}
                <strong>adipisicing</strong> elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea <a href="#">commodo</a> consequat. Duis aute irure
                dolor in reprehenderit in sed quia non numquam eius modi tempora
                incidunt ut labore et dolore magnam aliquam quaerat.
              </p>

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

            <div className="comments-area green-color">
              <h3 className="comments-title">2 Comments:</h3>
              <ol className="comment-list">
                <li className="comment">
                  <div className="comment-body">
                    <footer className="comment-meta">
                      <div className="comment-author vcard">
                        <div className="avatar">
                          <Image src={userImg1} alt="user" />
                        </div>
                        <b className="fn">John Jones</b>
                      </div>
                      <div className="comment-metadata">
                        <span>August 01, 2024 at 10:59 am</span>
                      </div>
                    </footer>
                    <div className="comment-content">
                      <p>
                        Lorem Ipsum has been the industry’s standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen.
                      </p>
                    </div>
                    <div className="reply">
                      <a href="#" className="comment-reply-link">
                        Reply
                      </a>
                    </div>
                  </div>

                  <ol className="children">
                    <li className="comment">
                      <div className="comment-body">
                        <footer className="comment-meta">
                          <div className="comment-author vcard">
                            <div className="avatar">
                              <Image src={userImg2} alt="user" />
                            </div>
                            <b className="fn">Steven Smith</b>
                          </div>
                          <div className="comment-metadata">
                            <span>August 02, 2024 at 21:59 am</span>
                          </div>
                        </footer>
                        <div className="comment-content">
                          <p>
                            Lorem Ipsum has been the industry’s standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen.
                          </p>
                        </div>
                        <div className="reply">
                          <a href="#" className="comment-reply-link">
                            Reply
                          </a>
                        </div>
                      </div>
                      <ol className="children">
                        <li className="comment">
                          <div className="comment-body">
                            <footer className="comment-meta">
                              <div className="comment-author vcard">
                                <div className="avatar">
                                  <Image src={userImg3} alt="user" />
                                </div>
                                <b className="fn">Sarah Taylor</b>
                              </div>
                              <div className="comment-metadata">
                                <span>August 03, 2024 at 05:59 am</span>
                              </div>
                            </footer>
                            <div className="comment-content">
                              <p>
                                Lorem Ipsum has been the industry’s standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it
                                to make a type specimen.
                              </p>
                            </div>
                            <div className="reply">
                              <a href="#" className="comment-reply-link">
                                Reply
                              </a>
                            </div>
                          </div>
                        </li>
                      </ol>
                    </li>
                  </ol>
                </li>

                <li className="comment">
                  <div className="comment-body">
                    <footer className="comment-meta">
                      <div className="comment-author vcard">
                        <div className="avatar">
                          <Image src={userImg4} alt="user" />
                        </div>
                        <b className="fn">John Doe</b>
                      </div>
                      <div className="comment-metadata">
                        <span>August 04, 2024 at 05:59 am</span>
                      </div>
                    </footer>
                    <div className="comment-content">
                      <p>
                        Lorem Ipsum has been the industry’s standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen.
                      </p>
                    </div>
                    <div className="reply">
                      <a href="#" className="comment-reply-link">
                        Reply
                      </a>
                    </div>
                  </div>
                  
                  <ol className="children">
                    <li className="comment">
                      <div className="comment-body">
                        <footer className="comment-meta">
                          <div className="comment-author vcard">
                            <div className="avatar">
                              <Image src={userImg1} alt="user" />
                            </div>
                            <b className="fn">James Anderson</b>
                          </div>
                          <div className="comment-metadata">
                            <span>August 05, 2024 at 04:59 am</span>
                          </div>
                        </footer>
                        <div className="comment-content">
                          <p>
                            Lorem Ipsum has been the industry’s standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen.
                          </p>
                        </div>
                        <div className="reply">
                          <a href="#" className="comment-reply-link">
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                  </ol>
                </li>
              </ol>

              <div className="comment-respond">
                <h3 className="comment-reply-title">Leave A Reply</h3>
                <p className="comment-notes">
                  <span id="email-notes">
                    Your email address will not be published.
                  </span>{" "}
                  Required fields are marked <span className="required">*</span>
                </p>

                <form className="comment-form">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Website"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          cols="30"
                          rows="5"
                          placeholder="Your Comment..."
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkme"
                        />
                        <label className="form-check-label" htmlFor="checkme">
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <button type="submit" className="submit-btn">
                        Post A Comment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-5 col-md-12">
            <div className="right-sidebar">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsContent2;
