import React from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import bgShape1 from "@/public/images/shape/bg-shape1.jpg";

const OurCreativeTeam = () => {
  const [creativeTeam, setCreativeTeam] = React.useState();
  React.useEffect(() => {
    const getCreativeTeam = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/our-creative-team?populate=teamImg.img`
      );
      setCreativeTeam(response.data);
    };
    getCreativeTeam();
  }, []);

  return (
    <>
      {creativeTeam && (
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
                    {creativeTeam.data.attributes.subTitle}
                  </span>
                  <h2>{creativeTeam.data.attributes.title}</h2>
                  <p>{creativeTeam.data.attributes.shortDec}</p>
                  <Link
                    href={creativeTeam.data.attributes.btnLink}
                    className="btn-style-one red-light-color"
                  >
                    {creativeTeam.data.attributes.btnText}{" "}
                    <i className="bx bx-chevron-right"></i>
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="team-member-list">
                  <ul>
                    {creativeTeam.data.attributes.teamImg.map((team) => (
                      <li
                        data-aos="zoom-in"
                        data-aos-duration="800"
                        key={team.id}
                      >
                        <img
                          src={team.img.data.attributes.url}
                          alt={team.img.data.attributes.alternativeText}
                        />
                      </li>
                    ))}
                  </ul>

                  <div className="bg-image">
                    <Image src={bgShape1} alt="bg-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OurCreativeTeam;
