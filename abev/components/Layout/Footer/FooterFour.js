import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "@/public/images/logo.png";

const FooterFour = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="template-footer-four pt-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3 className="nunito-font">About Us</h3>
              <ul className="quick-links">
                <li>
                  <Link href="/about-us-1">Our Story</Link>
                </li>
                <li>
                  <Link href="/contact">Careers</Link>
                </li>
                <li>
                  <Link href="/blogs/blog-grid">Latest News</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/terms-conditions">Terms & Condition</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3 className="nunito-font">Resources</h3>
              <ul className="quick-links">
                <li>
                  <Link href="/portfolio/portfolio-details">
                    Business Startup
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/portfolio-details">
                    Finance Consulting
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/portfolio-details">
                    Wealth Management
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/portfolio-details">
                    Business Planning
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/portfolio-details">
                    Data Management
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio/portfolio-details">
                    Marketing Planning
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3 className="nunito-font">Quick Links</h3>
              <ul className="quick-links">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about-us-1">About Us</Link>
                </li>
                <li>
                  <Link href="/blogs/blog-grid">Latest News</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms-conditions">Terms & Condition</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3 className="nunito-font">Newsletter</h3>
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
                  <button
                    type="submit"
                    className="btn-style-one dark-green-color"
                  >
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
          <div className="row align-items-center">
            <div className="col-lg-4 col-md-5">
              <p>
                &copy; {currentYear} Abev. All Rights Reserved by{" "}
                <a
                  href="https://envytheme.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  EnvyTheme
                </a>
              </p>
            </div>
            <div className="col-lg-4 col-md-3">
              <div className="logo">
                <Link href="/">
                  <Image src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
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
        </div>
      </div>
    </div>
  );
};

export default FooterFour;
