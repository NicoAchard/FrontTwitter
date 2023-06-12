import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { saveToken } from "../redux/userSlice";

function Sidebar({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <nav className="col-2 p-3 vh-100">
      <div className="position-fixed d-flex flex-column justify-content-between align-items-center h-100">
        <div className="d-flex flex-column align-items-center align-items-lg-start gap-3 w-100 ">
          <FontAwesomeIcon
            icon="fa-brands fa-twitter"
            style={{ width: "20px", color: " #1d9bf0 " }}
          />

          <Link
            className="text-decoration-none text-black d-flex gap-1 align-items-center"
            to="/"
          >
            <FontAwesomeIcon
              icon="fa-solid fa-house"
              style={{ width: "20px" }}
            />
            <p className="d-none d-lg-inline m-0">Home</p>
          </Link>

          <Link
            className="text-decoration-none text-black d-flex gap-1 align-items-center"
            to={`/profile/${user}`}
          >
            <FontAwesomeIcon
              icon="fa-regular fa-user"
              style={{ width: "20px" }}
            />
            <p className="d-none d-lg-flex m-0">Profile</p>
          </Link>
          <Link
            to="/"
            className="d-none d-lg-block btn btn-primary rounded-pill mt-3 w-100"
            style={{ backgroundColor: "#1d9bf0", border: "none" }}
          >
            Tweet
          </Link>

          <Link
            className="btn btn-primary rounded-pill d-block d-lg-none mt-3"
            style={{ backgroundColor: "#1d9bf0", border: "none" }}
            to="/"
          >
            <FontAwesomeIcon icon="fa-solid fa-feather" />
          </Link>
        </div>

        <div className="d-flex flex-column align-items-center w-100 mb-4">
          <button
            className="btn btn-danger rounded-pill d-none d-lg-block w-100"
            type="submit"
            onClick={() => {
              dispatch(saveToken(null));
              navigate("/login");
            }}
          >
            Logout
          </button>
          <button
            className="btn btn-danger rounded-pill d-block d-lg-none"
            onClick={() => {
              dispatch(saveToken(null));
              navigate("/login");
            }}
          >
            <i className="bi bi-arrow-bar-right" style={{ color: "white" }}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
