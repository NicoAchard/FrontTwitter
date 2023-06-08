import { Link } from "react-router-dom";

function Aside() {
  return (
    <aside className="col-2 col-md-4 p-2 d-flex d-none d-md-block d-lg-block flex-column vh-100">
      <div className="mt-2 p-2" style={{ backgroundColor: "#f7f9f9" }}>
        <h4>What's happening</h4>
        <div>
          <span className="text-secondary" style={{ fontSize: "0.9rem" }}>
            Programming · Trending
          </span>
          <h6 className="mb-0">#MongooseVsSequelize</h6>
          <p className="text-secondary" style={{ fontSize: "0.9rem" }}>
            97.5k Tweets
          </p>
        </div>

        <div>
          <span className="text-secondary" style={{ fontSize: "0.9rem" }}>
            Entertainment · Trending
          </span>
          <h6 className="mb-0">#StarWars</h6>
          <p className="text-secondary" style={{ fontSize: "0.9rem" }}>
            97.5k Tweets
          </p>
        </div>

        <div>
          <span className="text-secondary" style={{ fontSize: "0.9rem" }}>
            News · Trending
          </span>
          <h6 className="mb-0">#LifeInMars</h6>
          <p className="text-secondary" style={{ fontSize: "0.9rem" }}>
            97.5k Tweets
          </p>
        </div>
      </div>

      <div
        className="d-none d-md-flex d-lg-flex flex-column w-100 mt-5 p-2"
        style={{ backgroundColor: "#f7f9f9" }}
      >
        <h3>Who to follow</h3>
        <div className="d-inline-flex justify-content-between align-items-center">
          <div className="d-flex gap-2 align-items-center p-2">
            <div>
              <Link
                className="btn btn-primary rounded-pill"
                style={{ backgroundColor: "#cad8db", border: "none" }}
                to="/tweet"
              >
                <i
                  className="fa-solid fa-user"
                  style={{ color: "#647788" }}
                ></i>
              </Link>
            </div>

            <div className="d-flex flex-column">
              <span style={{ fontSize: "0.9rem" }}>
                <b>Hack Academy</b>
              </span>
              <span className="text-secondary" style={{ fontSize: "0.8rem" }}>
                @HackAcademyDev
              </span>
            </div>
          </div>
          <Link
            to=""
            className="btn btn-primary rounded-pill"
            style={{ backgroundColor: "#1d9bf0", border: "none" }}
          >
            Follow
          </Link>
        </div>
        <div className="d-inline-flex justify-content-between align-items-center">
          <div className="d-flex gap-2 align-items-center p-2">
            <div>
              <Link
                className="btn btn-primary rounded-pill"
                style={{ backgroundColor: "#cad8db", border: "none" }}
                to="/tweet"
              >
                <i
                  className="fa-solid fa-user"
                  style={{ color: "#647788" }}
                ></i>
              </Link>
            </div>

            <div className="d-flex flex-column">
              <span style={{ fontSize: "0.9rem" }}>
                <b>JavaScript</b>
              </span>
              <span className="text-secondary" style={{ fontSize: "0.8rem" }}>
                @JavaScript
              </span>
            </div>
          </div>
          <Link
            to=""
            className="btn btn-primary rounded-pill"
            style={{ backgroundColor: "#1d9bf0", border: "none" }}
          >
            Follow
          </Link>
        </div>
        <div className="d-inline-flex justify-content-between align-items-center">
          <div className="d-flex gap-2 align-items-center p-2">
            <div>
              <Link
                className="btn btn-primary rounded-pill"
                style={{ backgroundColor: "#cad8db", border: "none" }}
                to="/tweet"
              >
                <i
                  className="fa-solid fa-user"
                  style={{ color: "#647788" }}
                ></i>
              </Link>
            </div>

            <div className="d-flex flex-column">
              <span style={{ fontSize: "0.9rem" }}>
                <b>MongoDB</b>
              </span>
              <span className="text-secondary" style={{ fontSize: "0.8rem" }}>
                @MongoDB
              </span>
            </div>
          </div>
          <Link
            to=""
            className="btn btn-primary rounded-pill"
            style={{ backgroundColor: "#1d9bf0", border: "none" }}
          >
            Follow
          </Link>
        </div>
        <div className="d-inline-flex justify-content-between align-items-center">
          <div className="d-flex gap-2 align-items-center p-2">
            <div>
              <Link
                className="btn btn-primary rounded-pill"
                style={{ backgroundColor: "#cad8db", border: "none" }}
                to="/tweet"
              >
                <i
                  className="fa-solid fa-user"
                  style={{ color: "#647788" }}
                ></i>
              </Link>
            </div>

            <div className="d-flex flex-column">
              <span style={{ fontSize: "0.9rem" }}>
                <b>Node.js</b>
              </span>
              <span className="text-secondary" style={{ fontSize: "0.8rem" }}>
                @nodejs
              </span>
            </div>
          </div>
          <Link
            to=""
            className="btn btn-primary rounded-pill"
            style={{ backgroundColor: "#1d9bf0", border: "none" }}
          >
            Follow
          </Link>
        </div>
        <div className="d-inline-flex justify-content-between align-items-center">
          <div className="d-flex gap-2 align-items-center p-2">
            <div>
              <Link
                className="btn btn-primary rounded-pill"
                style={{ backgroundColor: "#cad8db", border: "none" }}
                to="/tweet"
              >
                <i
                  className="fa-solid fa-user"
                  style={{ color: "#647788" }}
                ></i>
              </Link>
            </div>

            <div className="d-flex flex-column">
              <span style={{ fontSize: "0.9rem" }}>
                <b>MDN Web DOcs</b>
              </span>
              <span className="text-secondary" style={{ fontSize: "0.8rem" }}>
                @MozDevNet
              </span>
            </div>
          </div>
          <Link
            to=""
            className="btn btn-primary rounded-pill"
            style={{ backgroundColor: "#1d9bf0", border: "none" }}
          >
            Follow
          </Link>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
