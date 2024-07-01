import React from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

import bgShape1 from "@/public/images/shape/bg-shape1.jpg";

const TeamOne = () => {
  const [team, setTeam] = React.useState();
  React.useEffect(() => {
    const getTeam = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/team-style-1?populate=teamImgList.img`
      );
      setTeam(response.data);
    };
    getTeam();
  }, []);

  return (
    <>
      {team && (
        <div className="team-area ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div
                  className="team-content"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <span className="sub-title">
                    {team.data.attributes.subTitle}
                  </span>
                  <h2>{team.data.attributes.title}</h2>
                  <p>{team.data.attributes.shortText}</p>
                  <Link
                    href={team.data.attributes.btnLink}
                    className="btn-style-one red-light-color"
                  >
                    {team.data.attributes.btnText}{" "}
                    <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="team-member-list">
                  <ul>
                    {team.data.attributes.teamImgList.map((list) => (
                      <li
                        data-aos="zoom-in"
                        data-aos-duration="800"
                        key={list.id}
                      >
                        <img
                          src={list.img.data.attributes.url}
                          alt={list.img.data.attributes.alternativeText}
                        />
                      </li>
                    ))}
                  </ul>

                  <Image src={bgShape1} alt="bg-image" className="bg-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamOne;
