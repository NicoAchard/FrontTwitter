import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Sidebar({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <nav className="col-2 p-3 d-flex flex-column justify-content-between align-items-center vh-100">
      <div className="d-flex flex-column align-items-center">
        <Link className="text-decoration-none mt-2" to="/tweet">
          <i className="bi bi-twitter"></i>
        </Link>
        <div className="d-flex align-items-center">
          <Link className="text-decoration-none text-black" to="/tweet">
            <i className="bi bi-house-door-fill"></i>
            <p className="d-none d-lg-inline">Home</p>
          </Link>
        </div>
        <Link
          className="text-decoration-none text-black"
          to={`/usuarios/${user.username}`}
        >
          <i className="bi bi-person-fill"></i>
          <p className="d-none d-lg-inline">Profile</p>
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
          <i className="bi bi-vector-pen" style={{ color: "white" }}></i>
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
