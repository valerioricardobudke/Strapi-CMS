import React from "react";
import Accordion from "@/components/Accordion";

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
  {
    question: "Can I cancel my subscription?",
    answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
  },
  {
    question: "Can I cancel my subscription?",
    answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
  },
  {
    question: "Can I cancel my subscription?",
    answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
  },
];

const Faq = () => {
  return (
    <div className="faq-area bg-f9f9f9 pt-100">
      <div className="container">
        <div className="section-title">
          <h2 className="nunito-font">
            Dedicated to help anything people’s needs
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur
            mauris amet, placerat fames orci elementum adipiscing.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="faq-accordion">
              <div className="accordion" id="faqAccordion">
                <Accordion questionsAnswers={questionsAnswers} />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="ask-question-form">
              <h3 className="nunito-font">Have a question?</h3>
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Full Name" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Enter your email address" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Company" />
                </div>
                <div className="form-group">
                  <textarea cols="30" rows="5" placeholder="Your Message" />
                </div>
                <button type="submit" className="btn-style-one orange-color">
                  Submit Now <i className="bx bx-chevron-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
