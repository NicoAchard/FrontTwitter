import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter, faFontAwesome } from "@fortawesome/free-brands-svg-icons";
import { faHouse, faUser, faFeather } from "@fortawesome/free-solid-svg-icons";
library.add(faTwitter, faFontAwesome, faHouse, faUser, faFeather);

function Sidebar({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <nav className="col-2 p-3 d-flex flex-column justify-content-between align-items-center vh-100">
      <div className="d-flex flex-column align-items-center align-items-lg-start gap-3">
        <Link className="text-decoration-none " to="/tweet">
          <FontAwesomeIcon
            icon="fa-brands fa-twitter"
            style={{ width: "20px" }}
          />
        </Link>
        <Link
          className="text-decoration-none text-black d-flex gap-1 align-items-center"
          to="/tweet"
        >
          <FontAwesomeIcon icon="fa-solid fa-house" style={{ width: "20px" }} />
          <p className="d-none d-lg-inline m-0">Home</p>
        </Link>

        <Link
          className="text-decoration-none text-black d-flex gap-1 align-items-center"
          to={`/usuarios/${user.username}`}
        >
          <FontAwesomeIcon icon="fa-solid fa-user" style={{ width: "20px" }} />
          <p className="d-none d-lg-flex m-0">Profile</p>
        </Link>
        <Link
          to="/tweet"
          className="d-none d-lg-block btn btn-primary rounded-pill mt-3"
          style={{ backgroundColor: "#1d9bf0", border: "none" }}
        >
          Tweet
        </Link>

        <Link
          className="btn btn-primary rounded-pill d-block d-lg-none mt-3"
          style={{ backgroundColor: "#1d9bf0", border: "none" }}
          to="/tweet"
        >
          <FontAwesomeIcon icon="fa-solid fa-feather" />
        </Link>
      </div>

      <div className="d-flex flex-column align-items-center">
        <form action="/logout" method="POST">
          <button
            className="btn btn-danger rounded-pill d-none d-lg-block"
            type="submit"
            onClick={() => {
              dispatch(saveToken(null));
              navigate("/login");
            }}
          >
            Logout
          </button>
        </form>

        <Link to="/" className="btn btn-danger rounded-pill d-block d-lg-none">
          <i className="bi bi-arrow-bar-right" style={{ color: "white" }}></i>
        </Link>
      </div>
    </nav>
  );
}

export default Sidebar;
