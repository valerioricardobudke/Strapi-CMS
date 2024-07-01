import React from "react";
import Link from "next/link";
import Image from "next/image";

import thankYouImg from "@/public/images/thank-you.png";

const ThankYou = () => {
  return (
    <div className="thank-you-area">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="thank-you-content">
              <Image src={thankYouImg} alt="thank-you" />
              <h3>Thank You!</h3>
              <p>Check your inbox for the order details!</p>
              <Link href="/" className="btn-style-one red-light-color">
                Back to Home <i className="bx bx-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
