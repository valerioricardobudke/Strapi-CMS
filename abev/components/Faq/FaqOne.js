import React from "react";
import Accordion from "../Accordion";

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
    question: "What do Abev courses include?",
    answer: `Abev is always looking for talented <a href="#">information</a> security and IT risk management professionals who are dedicated, hard working and looking for a challenge. If you are interested in employment with <strong>Abev</strong>, a company who values you and your family, visit our careers page.`,
  },
  {
    question: "How do I take a Abev course?",
    answer: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.`,
  },
  {
    question: "Is there any way to preview a course?",
    answer: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.`,
  },
  {
    question: "How can I pay for a course?",
    answer: `A dock which you can use to connect your console to the television for traditional gameplay`,
  },
  {
    question: "Where can I go for help?",
    answer: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.`,
  },
];

const FaqOne = () => {
  return (
    <div className="faq-area bg-f1f5fd">
      <div className="container">
        <div className="faq-accordion-content">
          <div className="box">
            <h3>Getting Started</h3>
            <div className="accordion" id="faqAccordion">
              <Accordion questionsAnswers={questionsAnswers} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqOne;
