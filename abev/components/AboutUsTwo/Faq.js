import React from "react";
import Accordion from "../Accordion";
import Image from "next/image";

import faqImg from "@/public/images/faq3.png";

const questionsAnswers = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
  },
  {
    question: "Can I cancel my subscription?",
    answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
  },
];

const Faq = () => {
  return (
    <div className="faq-area pb-100">
      <div className="container">
        <div className="section-title">
          <span className="sub-title dark-green-color">
            Frequently Ask & Question
          </span>
          <h2 className="nunito-font">
            Dedicated to help anything people’s needs
          </h2>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="faq-accordion">
              <div className="accordion" id="faqAccordion">
                <Accordion questionsAnswers={questionsAnswers} />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="faq-image style-three" data-aos="fade-up">
              <Image src={faqImg} alt="faq-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
