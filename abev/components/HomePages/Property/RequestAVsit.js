import React from "react";

const RequestAVsit = () => {
  return (
    <div className="request-a-visit-area ptb-100">
      <div className="container">
        <div className="request-a-visit-form">
          <span className="sub-title">Visit Apartment</span>
          <h2>Request a visit</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Full Name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Enter you emaill address" />
            </div>
            <div className="form-group">
              <input type="date" />
            </div>
            <div className="form-group">
              <select className="form-select">
                <option defaultselected="true">Time</option>
                <option defaultValue="1">10:00AM - 06:00PM</option>
                <option defaultValue="2">12:00AM - 06:00PM</option>
                <option defaultValue="3">11:00AM - 06:00PM</option>
                <option defaultValue="3">02:00AM - 06:00PM</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                cols="30"
                rows="4"
                placeholder="Your Message"
              ></textarea>
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

export default RequestAVsit;
