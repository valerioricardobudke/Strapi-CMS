import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import logo from "@/public/images/logo.png";
import courseImg from "@/public/images/navbar.jpg";

const Navbar5 = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

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

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  // Sidebar Modal
  const [isActiveSidebarModal, setActiveSidebarModal] = useState("false");
  const handleToggleSidebarModal = () => {
    setActiveSidebarModal(!isActiveSidebarModal);
  };

  return (
    <>
      <div id="navbar" className="navbar-area navbar-style-two">
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link href="/" className="navbar-brand">
                <Image src={logo} alt="site logo" />
              </Link>

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
                                <Image src={courseImg} alt="image" />
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
                          href="/portfolio/"
                          className={`nav-link ${
                            currentPath == "/portfolio/" && "active"
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
                            currentPath == "/blogs/how-our-company-works-in-different-ways/" && "active"
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

              <div className="others-option d-flex align-items-center">
                <div className="contact-info">
                  <div>
                    <i className="flaticon-call"></i>
                    <a href="tel:+11234567890">+1 (123) 456 7890</a>
                  </div>
                  <div>
                    <i className="flaticon-email"></i>
                    <a href="mailto:hello@abev.com">hello@abev.com</a>
                  </div>
                </div>

                <div className="info d-flex align-items-center">
                  <div
                    className="search-icon"
                    onClick={handleToggleSearchModal}
                  >
                    <i className="flaticon-search-interface-symbol"></i>
                  </div>
                  <div>
                    <button type="button" onClick={handleToggleSidebarModal}>
                      <i className="flaticon-menu"></i>
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div
        className={`search-overlay ${
          isActiveSearchModal ? "" : "search-overlay-active"
        }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}
            >
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Enter your keywords..."
                />
                <button type="submit">
                  <i className="flaticon-search-interface-symbol"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Modal */}
      <div
        className={`sidebarModal modal right ${
          isActiveSidebarModal ? "" : "show"
        }`}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              onClick={handleToggleSidebarModal}
            >
              <i className="flaticon-cancel"></i>
            </button>

            <div className="modal-body">
              <div className="logo">
                <Link href="/" className="d-inline-block">
                  <Image src={logo} alt="image" />
                </Link>
              </div>

              <ul className="sidebar-contact-info">
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
                  <a href="#" target="_blank" rel="noreferrer">
                    Find Us on Map
                  </a>
                </li>
              </ul>

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

              <div className="box">
                <p>Latest resources, sent to your inbox weekly</p>
                <form className="newsletter-form">
                  <input
                    type="text"
                    className="input-newsletter"
                    placeholder="Enter your email address"
                  />
                  <button type="submit" className="btn-style-one green-color">
                    Subscribe Now <i className="bx bx-chevron-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar5;
