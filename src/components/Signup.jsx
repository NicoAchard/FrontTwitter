import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { saveToken } from "../redux/userSlice";

function Signup() {
  const [inputFirstname, setInputFirstname] = useState("");
  const [inputLastname, setInputLastname] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputImage, setInputImage] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const dispatch = useDispatch();

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await axios({
      method: "POST",
      url: "http://localhost:3000/usuarios",
      data: {
        email: inputEmail,
        password: inputPassword,
        firstname: inputFirstname,
        lastname: inputLastname,
        username: inputUsername,
      },
    });

    dispatch(saveToken(response.data.token));
  }

  return (
    <>
      <div
        className="container-md my-auto"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="row gx-0 d-flex">
          <div className="sidebar d-none col-5 col-lg-7 d-md-flex flex-column justify-content-between">
            <i className="bi bi-twitter fs-1"></i>
            <h1 className="hi">Hi! Welcome to Twitter clone 👋</h1>
          </div>
          <div className="col-12 col-md-7 col-lg-5 align-items-center">
            <div className="form-container">
              <form
                action="http://localhost:3000/usuarios"
                method="POST"
                className="rounded-border d-flex flex-column justify-content-center"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
              >
                <h1>
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
                    placeholder="Firstname"
                    value={inputFirstname}
                    onChange={(event) => setInputFirstname(event.target.value)}
                  />
                  <input
                    type="text"
                    className="insert"
                    name="lastname"
                    placeholder="Lastname"
                    value={inputLastname}
                    onChange={(event) => setInputLastname(event.target.value)}
                  />
                  <input
                    type="email"
                    className="insert"
                    name="email"
                    placeholder="Email"
                    value={inputEmail}
                    onChange={(event) => setInputEmail(event.target.value)}
                  />
                  <input
                    type="text"
                    className="insert"
                    name="username"
                    placeholder="Username"
                    value={inputUsername}
                    onChange={(event) => setInputUsername(event.target.value)}
                  />
                  <label htmlFor="archivo" className="file-label">
                    <input
                      style={{ color: "transparent" }}
                      type="file"
                      id="archivo"
                      name="file"
                      className="file"
                      value={inputImage}
                      onChange={(event) => setInputImage(event.target.value)}
                    />
                  </label>
                  <input
                    type="password"
                    className="insert"
                    name="password"
                    placeholder="Password"
                    value={inputPassword}
                    onChange={(event) => setInputPassword(event.target.value)}
                  />
                </div>
                <div className="bottom">
                  <button className="signUp" type="submit">
                    Sign up
                  </button>
                  <p className="pt-2">Already have an account?</p>
                  <Link to="/login" style={{ textDecoration: "none" }}>
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
