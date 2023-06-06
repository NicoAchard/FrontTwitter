import { Link } from "react-router-dom";
import "../public/css/signup.css";
import { useState } from "react";
import axios from "axios";

function Signup() {
  const [inputFirstname, setInputFirstname] = useState("");
  const [inputLastname, setInputLastname] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputImage, setInputImage] = useState("");
  const [inputUsername, setInputUsername] = useState("");

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
    console.log(response);
    // dispatch(setToken(response.data.token));
  }

  const handlerChangeStates = (value, text) => {
    console.log(text);
    switch (text) {
      case "Firstname":
        setInputFirstname(value);
        break;
      case "Lastname":
        setInputLastname(value);
        break;
      case "Username":
        setInputUsername(value);
        break;
      case "Email":
        setInputEmail(value);
        break;
      case "Password":
        setInputPassword(value);
        break;
      case "Image":
        return setInputImage(value);
      default:
        break;
    }
  };

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
                action="http://localhost:3000/usuarios"
                method="POST"
                className="rounded-border"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
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
                    placeholder="Firstname"
                    value={inputFirstname}
                    onChange={(e) =>
                      handlerChangeStates(e.target.value, "Firstname")
                    }
                  />
                  <input
                    type="text"
                    className="insert"
                    name="lastname"
                    placeholder="Lastname"
                    value={inputLastname}
                    onChange={(e) =>
                      handlerChangeStates(e.target.value, "Lastname")
                    }
                  />
                  <input
                    type="email"
                    className="insert"
                    name="email"
                    placeholder="Email"
                    value={inputEmail}
                    onChange={(e) =>
                      handlerChangeStates(e.target.value, "Email")
                    }
                  />
                  <input
                    type="text"
                    className="insert"
                    name="username"
                    placeholder="Username"
                    value={inputUsername}
                    onChange={(e) =>
                      handlerChangeStates(e.target.value, "Username")
                    }
                  />
                  <label htmlFor="archivo" className="file-label">
                    <input
                      style={{ color: "transparent" }}
                      type="file"
                      id="archivo"
                      name="file"
                      className="file"
                      value={inputImage}
                      onChange={(e) =>
                        handlerChangeStates(e.target.files[0], "Image")
                      }
                    />
                  </label>
                  <input
                    type="password"
                    className="insert"
                    name="password"
                    placeholder="Password"
                    value={inputPassword}
                    onChange={(e) =>
                      handlerChangeStates(e.target.value, "Password")
                    }
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
