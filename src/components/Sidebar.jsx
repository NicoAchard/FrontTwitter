import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <nav className="col-2 p-3 d-flex flex-column justify-content-between align-items-center vh-100">
      <div className="d-flex flex-column align-items-center align-items-lg-start position-fixed">
        <Link className="text-decoration-none mt-2" to="/tweet">
          <i
            className="d-block fa-brands fa-twitter"
            style={{ color: "#1d9bf0" }}
          ></i>
        </Link>
        <div className="d-flex align-items-center">
          <Link className="text-decoration-none text-black" to="/tweet">
            <i
              className="mt-2 fa-solid fa-house mt-3"
              style={{ color: "#000000" }}
            ></i>
            <p className="d-none d-lg-inline">Home</p>
          </Link>
        </div>
        <Link
          className="text-decoration-none text-black"
          to={`/usuarios/${user.username}`}
        >
          <i
            className="fa-regular fa-user mt-3"
            style={{ color: "#000000" }}
          ></i>
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
          <i className="fa-solid fa-feather" style={{ color: "#ffffff" }}></i>
        </Link>
      </div>

      <div
        className="d-flex flex-column align-items-center align-items-lg-start"
        style={{ position: "fixed", bottom: "20px" }}
      >
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
          <i
            className="fa-solid fa-arrow-right-from-bracket"
            style={{ color: "#ffffff" }}
          ></i>
        </Link>
      </div>
    </nav>
  );
};
