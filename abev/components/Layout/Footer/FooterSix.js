import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "@/public/images/logo.png";
import shapeImg from "@/public/images/shape/shape5.png";

const FooterSix = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="template-footer-six pt-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="single-footer-widget">
              <Link href="/" className="logo">
                <Image src={logo} alt="logo" />
              </Link>

              <p>
                Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua minim.
              </p>

              <ul className="social-links">
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

          <div className="col-lg-4 col-md-6">
            <div className="single-footer-widget">
              <h3 className="nunito-font">Contact Info</h3>
              <ul className="footer-contact-info">
                <li>
                  <i className="bx bx-phone-call"></i>
                  <span>Mon to Fri : 10:00AM - 06:00PM</span>
                  <a href="tel:1235421457852">+123 54214 578 52</a>
                </li>
                <li>
                  <i className="bx bx-envelope"></i>
                  <span>Do You Have a Question?</span>
                  <a href="mailto:hello@abev.com">hello@abev.com</a>
                </li>
                <li>
                  <i className="bx bx-map"></i>
                  <span>2750 Quadra Street Victoria, Canada</span>
                  <a href="#" target="_blank">
                    Find Us on Map
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-footer-widget">
              <h3>Newsletter</h3>
              <div className="box">
                <p>Latest resources, sent to your inbox weekly</p>
                <form className="newsletter-form">
                  <input
                    type="text"
                    className="input-newsletter"
                    placeholder="Enter your email address"
                    name="EMAIL"
                    required
                    autoComplete="off"
                  />
                  <button type="submit" className="btn-style-one orange-color">
                    Subscribe Now <i className="bx bx-chevron-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <p>
            Copyright &copy; {currentYear} Abev. All Rights Reserved by{" "}
            <a href="https://envytheme.com/" target="_blank" rel="noreferrer">
              EnvyTheme
            </a>
          </p>
        </div>
      </div>

      <div className="shape5">
        <Image src={shapeImg} alt="shape" />
      </div>
    </div>
  );
};

export default FooterSix;
