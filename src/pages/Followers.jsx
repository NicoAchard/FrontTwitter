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
          url: `${import.meta.env.VITE_API_URL}/usuarios/followers`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        console.log(`${import.meta.env.VITE_API_URL}usuarios/followers`);
        const response = await axios.request(options);
        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchFollowers();
  }, []);

  async function handlerFollow(userTargetId) {
    console.log("hola");
    try {
      const options = {
        method: "POST",
        url: `${import.meta.env.VITE_API_URL}/usuarios/follow`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          id: userTargetId,
        },
      };

      const response = await axios.request(options);
      setUser(response.data.user);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="container-fluid container-lg">
      {user && (
        <div className="row">
          <Sidebar user={user} />
          <main className="col-10 col-md-6 border border-2 p-0 ">
            <div className="d-flex align-items-center">
              <Link to={`/profile/${user.username}`}>
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
            <div className="d-flex justify-content-around border-bottom border-1">
              <Link
                to="/followers"
                className="text-black fw-bold text-decoration-none pb-3 border-bottom border-4 border-bottom-blue"
              >
                Followers
              </Link>

              <Link to="/following" className="text-black text-decoration-none">
                Following
              </Link>
            </div>
            <div className="d-flex flex-column gap-2 align-items-center p-2">
              {user.followers.map((follower) => {
                const username = follower.username;
                const regex = /^[A-Za-z]+/;
                const match = username.match(regex);
                const result = match ? match[0] : "";

                return (
                  <div
                    className="d-flex justify-content-between w-100 p-3"
                    key={follower._id}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src={follower.profilePicture}
                        alt="picture"
                        className="rounded-circle img-avatar"
                      />

                      <div className="d-flex flex-column fs-6 fs-md-5">
                        <span>{follower.firstname}</span>
                        <span className="text-secondary">@{result}</span>
                      </div>
                    </div>
                    <div>
                      {user.following.includes(follower._id) ? (
                        <button
                          type="submit"
                          className="btn btn-light rounded-pill fw-bold border-1 border-black"
                          style={{ backgroundColor: "white" }}
                          onClick={() => handlerFollow(follower._id)}
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
                          onClick={() => handlerFollow(follower._id)}
                        >
                          Follow
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </main>
          <Aside />
        </div>
      )}
    </div>
  );
}

export default Followers;
