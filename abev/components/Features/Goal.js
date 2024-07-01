import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const Goal = () => {
  const [ourGoal, setOurGoal] = React.useState();
  React.useEffect(() => {
    const getOurGoal = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/chatbot-our-goal?populate=*`
      );
      setOurGoal(response.data);
    };
    getOurGoal();
  }, []);

  return (
    <>
      {ourGoal && (
        <div className="goal-area ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-lg-6 col-md-12"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className="goal-image">
                  <img
                    src={ourGoal.data.attributes.image.data.attributes.url}
                    alt={
                      ourGoal.data.attributes.image.data.attributes
                        .alternativeText
                    }
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="goal-content purple-color">
                  <span className="sub-title">
                    {ourGoal.data.attributes.subTitle}
                  </span>

                  <h2 className="nunito-font">
                    {ourGoal.data.attributes.title}
                  </h2>

                  <ul className="overview-list">
                    {ourGoal.data.attributes.lists.map((info) => (
                      <li
                        data-aos="fade-up"
                        data-aos-duration="800"
                        key={info.id}
                      >
                        <i className="flaticon-draw-check-mark"></i>
                        {info.text}
                      </li>
                    ))}
                  </ul>

                  <div
                    className="btn-box"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="300"
                  >
                    <Link
                      href={ourGoal.data.attributes.btnLink}
                      className="btn-style-one purple-color"
                    >
                      {ourGoal.data.attributes.btnText}{" "}
                      <i className="bx bx-chevron-right"></i>
                    </Link>
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

export default Goal;
