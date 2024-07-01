import React from "react";
import Link from "next/link";
import Image from "next/image";

import developSkillImg from "@/public/images/develop-skill.jpg";
import shape14 from "@/public/images/shape/shape14.png";

const Skills = () => {
  return (
    <div className="develop-skill-area bg-fff9ee">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="develop-skill-image">
              <Image src={developSkillImg} alt="develop-skill" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div
              className="develop-skill-content"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <span className="sub-title">Education for everyone</span>
              <h2 className="nunito-font">
                Develop your skills from anywhere in the world!
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                proin lectus in aliquam orci mollis ornare nec. Commodo morbi
                tincidunt egestas velit sed.
              </p>
              <ul className="skill-list">
                <li>
                  <div className="icon">
                    <i className="bx bx-check-double"></i>
                  </div>
                  Expert Trainers
                  <Link href="/courses" className="link-btn">
                    <i className="bx bx-chevron-right"></i>
                  </Link>
                </li>
                <li>
                  <div className="icon">
                    <i className="bx bx-check-double"></i>
                  </div>
                  Lifetime Access
                  <Link href="/courses" className="link-btn">
                    <i className="bx bx-chevron-right"></i>
                  </Link>
                </li>
                <li>
                  <div className="icon">
                    <i className="bx bx-check-double"></i>
                  </div>
                  Remote Learning
                  <Link href="/courses" className="link-btn">
                    <i className="bx bx-chevron-right"></i>
                  </Link>
                </li>
                <li>
                  <div className="icon">
                    <i className="bx bx-check-double"></i>
                  </div>
                  Self Development
                  <Link href="/courses" className="link-btn">
                    <i className="bx bx-chevron-right"></i>
                  </Link>
                </li>
              </ul>
              <Link href="/courses" className="btn-style-one yellow-color">
                View All Courses <i className="bx bx-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="shape14">
        <Image src={shape14} alt="shape" />
      </div>
    </div>
  );
};

export default Skills;
