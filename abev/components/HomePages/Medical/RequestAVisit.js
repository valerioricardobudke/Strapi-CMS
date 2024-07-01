import React from "react";

const RequestAVisit = () => {
  return (
    <div className="request-a-visit-area bg2 ptb-100">
      <div className="container">
        <div
          className="request-a-visit-form"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <span className="sub-title">Visit Apartment</span>
          <h2>Make an appointment</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Enter you emaill address" />
            </div>
            <div className="form-group">
              <input type="text" placeholder="MM / DD / YY" />
            </div>
            <div className="form-group">
              <select className="form-select">
                <option defaultselected="true">Select Department</option>
                <option defaultValue="1">Cardiology</option>
                <option defaultValue="2">Neurosurgery</option>
                <option defaultValue="3">Dental</option>
              </select>
            </div>
            <div className="form-group">
              <textarea cols="30" rows="4" placeholder="Your Message" />
            </div>
            <button type="submit" className="btn-style-one red-light-color">
              Submit Now <i className="bx bx-chevron-right"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestAVisit;
