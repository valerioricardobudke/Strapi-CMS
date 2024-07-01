import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";
import Image from "next/image";

import coursesImg1 from "@/public/images/courses/courses1.jpg";

const DetailsTop = () => {
  // if toggler is updated when lightbox is closed it will open it
  // if toggler is updated when lightbox is opened it will close it
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/watch?v=bk7McNUjWgw"]}
      />

      <div className="courses-details-area ptb-100 bg-f9f9f9">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="courses-details-header">
                <div className="rating">
                  <i className="bx bxs-star checked"></i>
                  <i className="bx bxs-star checked"></i>
                  <i className="bx bxs-star checked"></i>
                  <i className="bx bxs-star checked"></i>
                  <i className="bx bxs-star"></i>
                  <div className="rating-count">
                    <span>4.0 (2 rating)</span>
                  </div>
                </div>
                <h2>Make a 2D Platformer with State Machines in Unity</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="courses-meta d-flex align-items-center">
                  <ul>
                    <li>
                      <i className="bx bx-folder-open"></i>
                      <span>Category</span>
                      <Link href="/courses">Node.js</Link>
                    </li>
                  </ul>

                  <Link
                    href="/authentication"
                    className="btn-style-one yellow-color"
                  >
                    Enroll Now <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="courses-details-image">
                <Image src={coursesImg1} alt="image" />
                <div
                  onClick={() => setToggler(!toggler)}
                  className="popup-video"
                >
                  <i className="bx bx-play"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsTop;
