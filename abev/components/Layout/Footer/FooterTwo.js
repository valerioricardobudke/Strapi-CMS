import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const FooterTwo = () => {
  // Logo API
  const [logo, setLogo] = React.useState();
  React.useEffect(() => {
    const getLogo = async () => {
      const response = await axios.get(`${baseApiUrl}/api/logo?populate=*`);
      setLogo(response.data);
    };
    getLogo();
  }, []);

  const currentYear = new Date().getFullYear();
  return (
    <div className="template-footer-two pt-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="single-footer-widget">
              {logo && (
                <Link href="/" className="logo">
                  <img
                    src={logo.data.attributes.whiteLogo.data.attributes.url}
                    alt={
                      logo.data.attributes.whiteLogo.data.attributes
                        .alternativeText
                    }
                  />
                </Link>
              )}
              <p>
                Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor
                incididunt.
              </p>
              <ul className="footer-contact-info">
                <li>
                  <i className="bx bx-phone-call"></i>
                  <a href="tel:+1-485-456-0102">+1-485-456-0102</a>
                </li>
                <li>
                  <i className="bx bx-envelope"></i>
                  <a href="mailto:hello@abev.com">hello@abev.com</a>
                </li>
                <li>
                  <i className="bx bx-map"></i>
                  2750 Quadra Street Victoria, Canada.
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-footer-widget pl-3">
              <h3>Quick links</h3>
              <ul className="quick-links">
                <li>
                  <Link href="/">IT Startup</Link>
                </li>
                <li>
                  <Link href="/software">Software</Link>
                </li>
                <li>
                  <Link href="/business">Business</Link>
                </li>
                <li>
                  <Link href="/app">App</Link>
                </li>
                <li>
                  <Link href="/insurance">Insurance</Link>
                </li>
                <li>
                  <Link href="/property">Property</Link>
                </li>
                <li>
                  <Link href="/big-data">Big Data</Link>
                </li>
                <li>
                  <Link href="/distance-learning">Distance Learning</Link>
                </li>
                <li>
                  <Link href="/chatbot">Chatbot</Link>
                </li>
                <li>
                  <Link href="/medical">Medical</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
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
                    required={true}
                    autoComplete="off"
                  />
                  <button
                    type="submit"
                    className="btn-style-one red-light-color"
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
            <div className="col-lg-6 col-md-7">
              <p>
                Copyright &copy; {currentYear} Abev. All Rights Reserved by{" "}
                <a
                  href="https://envytheme.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  EnvyTheme
                </a>
              </p>
            </div>
            <div className="col-lg-6 col-md-5">
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

export default FooterTwo;
