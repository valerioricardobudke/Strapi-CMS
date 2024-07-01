import React from "react";
import Image from "next/image";
import Link from "next/link";

import teamImg1 from "@/public/images/team/team1.png";
import teamImg2 from "@/public/images/team/team2.png";
import teamImg3 from "@/public/images/team/team3.png";
import teamImg4 from "@/public/images/team/team4.png";
import teamImg5 from "@/public/images/team/team5.png";
import teamImg6 from "@/public/images/team/team6.png";
import bgShape1 from "@/public/images/shape/bg-shape1.jpg";

const Team = () => {
  return (
    <div className="team-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div
              className="team-content"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <span className="sub-title">Our Creative Doctors</span>
              <h2>Meet our qualified doctors</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                auctor purus risus, eu vitae neque, a platea sit. Dui nisi
                tempus in ac arcu. In neque laoreet mi malesuada quam morbi.
                Nisl sed a risus vitae, platea eget. Tortor, nisl aliquam urna
                dignissim.
              </p>

              <Link href="/team" className="btn-style-one green-color">
                Meet Our Doctors <i className="bx bx-chevron-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="team-member-list">
              <ul>
                <li data-aos="zoom-in" data-aos-duration="800">
                  <Image src={teamImg1} alt="member-image" />
                </li>
                <li
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="100"
                >
                  <Image src={teamImg2} alt="member-image" />
                </li>
                <li
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <Image src={teamImg3} alt="member-image" />
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  <Image src={teamImg4} alt="member-image" />
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="400"
                >
                  <Image src={teamImg5} alt="member-image" />
                </li>
                <li
                  data-aos="fade-down"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >
                  <Image src={teamImg6} alt="member-image" />
                </li>
              </ul>

              <Image src={bgShape1} alt="bg-image" className="bg-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
