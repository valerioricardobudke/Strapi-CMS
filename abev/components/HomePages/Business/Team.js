import React from "react";
import Link from "next/link";
import Image from "next/image";

import teamImg7 from "@/public/images/team/team7.jpg";
import teamImg8 from "@/public/images/team/team8.jpg";
import teamImg9 from "@/public/images/team/team9.jpg";
import teamImg10 from "@/public/images/team/team10.jpg";
import shapeImg4 from "@/public/images/shape/shape4.png";

const Team = () => {
  return (
    <div className="team-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="team-member-list-style-two">
              <div className="row">
                <div
                  className="col-lg-6 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <div className="single-team-member bg1">
                    <Image src={teamImg7} alt="member-image" />
                    <div className="content">
                      <h3>Franco Gino</h3>

                      <ul className="social">
                        <li>
                          <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-facebook-app-symbol"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.twitter.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-6 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <div className="single-team-member bg2">
                    <Image src={teamImg8} alt="member-image" />
                    <div className="content">
                      <h3>Emila Lucy</h3>
                      <ul className="social">
                        <li>
                          <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-facebook-app-symbol"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.twitter.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-6 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <div className="single-team-member bg3">
                    <Image src={teamImg9} alt="member-image" />
                    <div className="content">
                      <h3>Alina Smith</h3>
                      <ul className="social">
                        <li>
                          <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-facebook-app-symbol"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.twitter.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-6 col-md-6 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <div className="single-team-member bg4">
                    <Image src={teamImg10} alt="member-image" />
                    <div className="content">
                      <h3>Andrea Romeo</h3>
                      <ul className="social">
                        <li>
                          <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-facebook-app-symbol"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.twitter.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-linkedin"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i className="flaticon-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shape4">
                <Image src={shapeImg4} alt="shape" />
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="team-content style-two">
              <span className="sub-title">Our Creative Team</span>
              <h2>Our team believes you deserve only the best</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                auctor purus risus, eu vitae neque, a platea sit. Dui nisi
                tempus in ac arcu. In neque laoreet mi malesuada quam morbi.
                Nisl sed a risus vitae, platea eget. Tortor, nisl aliquam urna
                dignissim.
              </p>
              <Link href="/team" className="btn-style-one red-light-color">
                Meet Our Team <i className="bx bx-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
