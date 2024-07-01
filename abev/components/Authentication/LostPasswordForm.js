import React from "react";

const LostPasswordForm = () => {
  return (
    <>
      <div className="profile-authentication-area ptb-100">
        <div className="container">
          <div className="lost-password-box">
            <p>
              Lost your password? Please enter your username or email address.
              You will receive a link to create a new password via email.
            </p>
            <form>
              <label>Username or email</label>
              <input type="text" className="form-control" />
              <button type="submit">Reset Password</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LostPasswordForm;
