import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Aside from "../components/Aside";
import { useSelector } from "react-redux";

function Followers() {
  const [user, setUser] = useState(null);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const options = {
          method: "GET",
          url: "http://localhost:3000/usuarios/followers",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.request(options);
        console.log(response.data.user.followers);
        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchFollowers();
  }, []);

  return (
    <div className="container">
      {user && (
        <div className="row">
          <Sidebar user={user} />
          <main className="col-10 col-md-6 border border-2 p-0 d-flex flex-column">
            <div className="d-flex col-auto-3 align-items-center">
              <Link to="/tweets">
                <i className="bi bi-arrow-left text-black ms-2"> </i>
              </Link>
              {console.log(user)}
              <div className="ms-4 mt-2">
                <h5>
                  {user.firstname} {user.lastname}
                </h5>
                <p className="text-secondary">@{user.username}</p>
              </div>
            </div>
            <div className="row">
              <div className="col d-inline-flex justify-content-center align-items-center">
                <Link
                  to="/usuarios/followers"
                  className="text-black fw-bold text-decoration-none pb-3 border-bottom border-3"
                  style={{ borderColor: "rgba(29, 155, 240, 1)" }}
                >
                  Followers
                </Link>
              </div>
              <div className="col d-inline-flex justify-content-center align-items-center">
                <Link to="/usuarios/following" className="text-black">
                  Following
                </Link>
              </div>
            </div>
            <hr />
            <div className="row d-inline-flex justify-content-between align-items-center">
              <div className="col flex-column d-flex gap-2 align-items-center p-2">
                {user.followers.map((follower) => (
                  <div
                    className="d-flex justify-content-between w-100 p-3"
                    key={follower._id}
                  >
                    <div className="d-flex align-items-center gap-3">
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
                      <div className="d-flex flex-column">
                        <span style={{ fontSize: "1.2rem" }}>
                          {follower.username}
                        </span>
                        <span className="text-secondary">
                          @{follower.username}
                        </span>
                      </div>
                    </div>
                    <div>
                      {
                        <form action="/usuarios/follow" method="POST">
                          <input
                            type="hidden"
                            name="id"
                            value="<%=follower._id%>"
                          />
                          {user.followers.includes(user.id) ? (
                            <button
                              type="submit"
                              className="btn btn-light rounded-pill fw-bold border-1 border-black bg-white"
                            >
                              Following
                            </button>
                          ) : (
                            <button
                              className="btn btn-primary rounded-pill"
                              style={{
                                backgroundColor: "#1d9bf0",
                                border: "none",
                              }}
                            >
                              Follow
                            </button>
                          )}
                        </form>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
          <Aside />
        </div>
      )}
    </div>
  );
}

export default Followers;
