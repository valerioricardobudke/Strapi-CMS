import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

import courseImg from "@/public/images/navbar.jpg";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  // Logo API
  const [logo, setLogo] = React.useState();
  React.useEffect(() => {
    const getLogo = async () => {
      const response = await axios.get(`${baseApiUrl}/api/logo?populate=*`);
      setLogo(response.data);
    };
    getLogo();
  }, []);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              {logo && (
                <Link href="/" className="navbar-brand">
                  <Image
                    src={logo.data.attributes.blackLogo.data.attributes.url}
                    alt={
                      logo.data.attributes.blackLogo.data.attributes
                        .alternativeText
                    }
                    width={135}
                    height={50}
                  />
                </Link>
              )}

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      href="/"
                      className={`nav-link ${currentPath == "/" && "active"}`}
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item megamenu">
                    <Link
                      href="#"
                      className="dropdown-toggle nav-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Features
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <div className="container">
                          <div className="row">
                            <div className="col-12 col-sm-6 col-md-3 mtb-5">
                              <ul className="megamenu-submenu">
                                <li className="nav-item">
                                  <Link
                                    href="/services/services/"
                                    className={`nav-link ${
                                      currentPath == "/services/services/" &&
                                      "active"
                                    }`}
                                  >
                                    Services
                                  </Link>
                                </li>

                                <li className="nav-item">
                                  <Link
                                    href="/services/zero-configuration/"
                                    className={`nav-link ${
                                      currentPath ==
                                        "/services/zero-configuration/" &&
                                      "active"
                                    }`}
                                  >
                                    Services Details
                                  </Link>
                                </li>

                                <li className="nav-item">
                                  <Link
                                    href="/portfolio/portfolio-1/"
                                    className={`nav-link ${
                                      currentPath ==
                                        "/portfolio/portfolio-1/" && "active"
                                    }`}
                                  >
                                    Classic Two Column
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col-12 col-sm-6 col-md-3 mtb-5">
                              <ul className="megamenu-submenu">
                                <li className="nav-item">
                                  <Link
                                    href="/features/"
                                    className={`nav-link ${
                                      currentPath == "/features/" && "active"
                                    }`}
                                  >
                                    Features
                                  </Link>
                                </li>

                                <li className="nav-item">
                                  <Link
                                    href="/team/"
                                    className={`nav-link ${
                                      currentPath == "/team/" && "active"
                                    }`}
                                  >
                                    Team
                                  </Link>
                                </li>

                                <li className="nav-item">
                                  <Link
                                    href="/pricing/"
                                    className={`nav-link ${
                                      currentPath == "/pricing/" && "active"
                                    }`}
                                  >
                                    Pricing
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col-12 col-sm-6 col-md-3 mtb-5">
                              <ul className="megamenu-submenu">
                                <li className="nav-item">
                                  <Link
                                    href="/blogs/blog-grid/"
                                    className={`nav-link ${
                                      currentPath == "/blogs/blog-grid/" &&
                                      "active"
                                    }`}
                                  >
                                    Blog Grid
                                  </Link>
                                </li>

                                <li className="nav-item">
                                  <Link
                                    href="/blogs/blog-left-sidebar/"
                                    className={`nav-link ${
                                      currentPath ==
                                        "/blogs/blog-left-sidebar/" && "active"
                                    }`}
                                  >
                                    Blog Left Sidebar
                                  </Link>
                                </li>

                                <li className="nav-item">
                                  <Link
                                    href="/blogs/blog-right-sidebar/"
                                    className={`nav-link ${
                                      currentPath ==
                                        "/blogs/blog-right-sidebar/" && "active"
                                    }`}
                                  >
                                    Blog Right Sidebar
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col-12 col-sm-6 col-md-3 mtb-5">
                              <Link href="#" className="d-block p-0">
                                <Image
                                  src={courseImg}
                                  alt="image"
                                  width={860}
                                  height={520}
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="#"
                      className="dropdown-toggle nav-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Pages
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/about-us/"
                          className={`nav-link ${
                            currentPath == "/about-us/" && "active"
                          }`}
                        >
                          About Us
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/team/"
                          className={`nav-link ${
                            currentPath == "/team/" && "active"
                          }`}
                        >
                          Team
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/testimonials/"
                          className={`nav-link ${
                            currentPath == "/testimonials/" && "active"
                          }`}
                        >
                          Testimonials
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/pricing/"
                          className={`nav-link ${
                            currentPath == "/pricing/" && "active"
                          }`}
                        >
                          Pricing
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/features/"
                          className={`nav-link ${
                            currentPath == "/features/" && "active"
                          }`}
                        >
                          Features
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="#"
                          className="dropdown-toggle nav-link"
                          onClick={(e) => e.preventDefault()}
                        >
                          Services
                        </Link>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link
                              href="/services/services/"
                              className={`nav-link ${
                                currentPath == "/services/services/" && "active"
                              }`}
                            >
                              Services
                            </Link>
                          </li>

                          <li className="nav-item">
                            <Link
                              href="/services/simple-dashboard/"
                              className={`nav-link ${
                                currentPath == "/services/simple-dashboard/" &&
                                "active"
                              }`}
                            >
                              Services Details
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/authentication/"
                          className={`nav-link ${
                            currentPath == "/authentication/" && "active"
                          }`}
                        >
                          Login/Register
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/lost-password/"
                          className={`nav-link ${
                            currentPath == "/lost-password/" && "active"
                          }`}
                        >
                          Forgot Password
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/faq/"
                          className={`nav-link ${
                            currentPath == "/faq/" && "active"
                          }`}
                        >
                          FAQ
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/privacy-policy/"
                          className={`nav-link ${
                            currentPath == "/privacy-policy/" && "active"
                          }`}
                        >
                          Privacy Policy
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/terms-conditions/"
                          className={`nav-link ${
                            currentPath == "/terms-conditions/" && "active"
                          }`}
                        >
                          Terms & Conditions
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/coming-soon/"
                          className={`nav-link ${
                            currentPath == "/coming-soon/" && "active"
                          }`}
                        >
                          Coming Soon
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/404/"
                          className={`nav-link ${
                            currentPath == "/404/" && "active"
                          }`}
                        >
                          404 Error Page
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/thank-you/"
                          className={`nav-link ${
                            currentPath == "/thank-you/" && "active"
                          }`}
                        >
                          Thank You
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="#"
                      className="dropdown-toggle nav-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Portfolio
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/portfolio/portfolio-1/"
                          className={`nav-link ${
                            currentPath == "/portfolio/portfolio-1/" && "active"
                          }`}
                        >
                          Classic Two Column
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/portfolio/business-startup/"
                          className={`nav-link ${
                            currentPath == "/portfolio/business-startup/" &&
                            "active"
                          }`}
                        >
                          Portfolio Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="#"
                      className="dropdown-toggle nav-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Services
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/services/services/"
                          className={`nav-link ${
                            currentPath == "/services/services/" && "active"
                          }`}
                        >
                          Services
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/services/information-retrieval/"
                          className={`nav-link ${
                            currentPath == "/services/information-retrieval/" &&
                            "active"
                          }`}
                        >
                          Services Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="#"
                      className="dropdown-toggle nav-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Blog
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/blogs/blog-grid/"
                          className={`nav-link ${
                            currentPath == "/blogs/blog-grid/" && "active"
                          }`}
                        >
                          Blog Grid
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blogs/blog-left-sidebar/"
                          className={`nav-link ${
                            currentPath == "/blogs/blog-left-sidebar/" &&
                            "active"
                          }`}
                        >
                          Blog Left Sidebar
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blogs/blog-right-sidebar/"
                          className={`nav-link ${
                            currentPath == "/blogs/blog-right-sidebar/" &&
                            "active"
                          }`}
                        >
                          Blog Right Sidebar
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blogs/how-our-company-works-in-different-ways/"
                          className={`nav-link ${
                            currentPath ==
                              "/blogs/how-our-company-works-in-different-ways/" &&
                            "active"
                          }`}
                        >
                          Left Sidebar
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/contact/"
                      className={`nav-link ${
                        currentPath == "/contact/" && "active"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="others-option">
                <Link href="/pricing" className="btn-style-one blue-dark-color">
                  Request A Demo <i className="bx bx-chevron-right"></i>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
