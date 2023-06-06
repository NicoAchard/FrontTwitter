import { Link } from "react-router-dom";

function Login() {
  return (
    <div
      className="container-md"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className="row gx-0 d-flex">
        <div className="sidebar d-none col-5 col-lg-7 d-md-flex flex-column justify-content-between">
          <i className="bi bi-twitter fs-1 d-flex align-items-self"></i>
          <h1>Hey! Nice to see you again 🥰</h1>
        </div>
        <div className="col-12 col-md-7 col-lg-5 align-items-center h-100">
          <div className="form-container">
            <form
              action="http://localhost:3000/"
              method="POST"
              className="rounded-border d-flex flex-column justify-content-center"
              encType="multipart/form-data"
            >
              <h1>
                <strong>Login</strong>
              </h1>
              <p className="separate">Ready to start using Twitter?</p>
              <div className="input-container">
                <input
                  type="text"
                  className="insert"
                  name="username"
                  placeholder="Username or email"
                />
                <input
                  type="password"
                  className="insert"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="bottom">
                <button className="signUp" type="submit">
                  Login
                </button>
                <p className="pt-2">You don't have an account?</p>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
