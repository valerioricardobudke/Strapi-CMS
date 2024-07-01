import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <div className="col-lg-6 col-md-12">
      <div className="login-form">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Username or email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Username or email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 remember-me-wrap">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="remember-me"
                />
                <label className="form-check-label" htmlFor="remember-me">
                  Remember me
                </label>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 lost-your-password-wrap">
              <Link href="/lost-password" className="lost-your-password">
                Lost your password?
              </Link>
            </div>
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
