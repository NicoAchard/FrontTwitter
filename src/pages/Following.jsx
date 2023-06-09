import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Aside from "../components/Aside";
import { useSelector } from "react-redux";

function Following() {
  const [user, setUser] = useState(null);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const fetchFollowing = async () => {
      try {
        const options = {
          method: "GET",
          url: "http://localhost:3000/usuarios/following",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.request(options);
        console.log(response.data.user);
        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchFollowing();
  }, []);

  return (
    <div className="container">
      {user && (
        <div className="row">
          <Sidebar user={user} />
          <main className="col-10 col-md-6 border border-2 p-0 ">
            <div className="d-flex align-items-center">
              <Link to="/usuarios/<%=user.username%>">
                <i className="bi bi-arrow-left text-black ms-2"> </i>
              </Link>
              <div className="ms-4 mt-2">
                <h5>
                  {user.firstname} {user.lastname}
                </h5>
                <p className="text-secondary">{user.username}</p>
              </div>
            </div>
            <div className="row d-flex justify-content-around border-bottom border-1">
              <Link
                to="/usuarios/followers"
                className="text-black text-decoration-none"
              >
                Followers
              </Link>

              <Link
                to="/usuarios/following"
                className="text-black fw-bold text-decoration-none pb-3 border-bottom border-4 border-bottom-blue"
              >
                Following
              </Link>
            </div>

            <div className="d-flex flex-column gap-2 align-items-center p-2">
              {/* <Link
                    className="btn btn-primary rounded-pill"
                    style={{ backgroundColor: "#cad8db", border: "none" }}
                    to="/tweet"
                  >
                    <i className="fa-solid fa-user" style="color: #647788"></i>
                  </Link> */}
              {user.following.map((following) => (
                <div
                  className="d-flex justify-content-between w-100 p-3"
                  key={following._id}
                >
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={following.profilePicture}
                      alt="picture"
                      className="rounded-circle img-avatar"
                    />

                    <div className="d-flex flex-column fs-6 fs-md-5">
                      <span>{following.username}</span>
                      <span className="text-secondary">
                        @ {following.username}
                      </span>
                    </div>
                  </div>
                  <div>
                    <form action="/usuarios/follow" method="post">
                      <input
                        type="hidden"
                        name="id"
                        value="<%=follower._id%>"
                      />
                      <button
                        type="submit"
                        className="btn btn-light rounded-pill fw-bold border-1 border-black"
                        style={{ backgroundColor: "white" }}
                      >
                        Following
                      </button>
                    </form>
                  </div>
                </div>
              ))}
            </div>
          </main>
          <Aside />
        </div>
      )}
    </div>
  );
}

export default Following;
