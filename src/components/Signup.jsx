import { Link } from "react-router-dom";
import "../public/css/signup.css";

function Signup() {
  return (
    <>
      <div
        className="container-md mt-5"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="row gx-0 d-flex">
          <div className="sidebar d-none col-5 col-lg-7 d-md-block">
            <i className="bi bi-twitter"></i>
            <h1 className="hi">Hi! Welcome to Twitter clone 👋</h1>
          </div>
          <div className="col-12 col-md-7 col-lg-5 align-items-center">
            <div className="form-container">
              <form
                action="/signup"
                method="POST"
                className="rounded-border"
                encType="multipart/form-data"
              >
                <h1 className="pt-5">
                  <strong>Sign up</strong>
                </h1>
                <p className="separate">
                  Create an account and start using Twitter
                </p>
                <div className="input-container">
                  <input
                    type="text"
                    className="insert"
                    name="firstname"
                    placeholder="First name"
                  />
                  <input
                    type="text"
                    className="insert"
                    name="lastname"
                    placeholder="Last name"
                  />
                  <input
                    type="email"
                    className="insert"
                    name="email"
                    placeholder="Email"
                  />
                  <input
                    type="text"
                    className="insert"
                    name="username"
                    placeholder="Username"
                  />
                  <label htmlFor="archivo" className="file-label">
                    <input
                      style={{ color: "transparent" }}
                      type="file"
                      id="archivo"
                      name="file"
                      className="file"
                    />
                  </label>
                  <input
                    type="password"
                    className="insert"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div className="bottom">
                  <button className="signUp" type="submit">
                    Sign up
                  </button>
                  <p className="pt-2">Already have an account?</p>
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    Sign in
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
