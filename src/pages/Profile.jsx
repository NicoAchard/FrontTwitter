import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Sidebar from "../components/Sidebar";
import Aside from "../components/Aside";

export default () => {
  const [user, setUser] = useState(null);
  const params = useParams();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_API_URL}/usuarios/${params.username}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="container-fluid container-lg">
      {user && (
        <div className="row">
          {console.log(user)}
          <Sidebar user={user} />
          <main className="col-10 col-md-6 border border-2 p-0 d-flex flex-column">
            <div
              className="w-100"
              style={{ height: "150px", backgroundColor: "rgb(29, 155, 240)" }}
            ></div>
            <div className="d-flex justify-content-between px-2">
              <div
                className="d-flex flex-column position-relative gap-2"
                style={{ bottom: "50px" }}
              >
                <img
                  src="<%=userUrl.profilePicture%>"
                  alt="Avatar del usuario <%= userUrl.username %>"
                  className="img_avatar_perfil border-5 border border-white"
                />

                <h1 className="h6"> {user.username}</h1>
              </div>
            </div>
            <div
              className="d-flex justify-content-between px-2 position-relative"
              style={{ bottom: "60px" }}
            >
              <div>
                <small className="text-muted">@ {user.username} </small>
              </div>
              <div>
                <small className="text-muted">
                  <span className="text-dark"> {user.following.length} </span>
                  <Link
                    to="/usuarios/following"
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    Following
                  </Link>
                </small>
                <small className="text-muted">
                  <span className="text-dark"> {user.followers.length} </span>
                  <Link
                    to="/usuarios/followers"
                    className="text-dark"
                    style={{ textDecoration: "none" }}
                  >
                    Followers
                  </Link>
                </small>
              </div>
            </div>
            <div className="px-2 pb-3">
              <b
                className="border-bottom border-4 pb-2"
                style={{ borderColor: "rgba(29, 155, 240, 1)" }}
              >
                Tweets
              </b>
            </div>
            {user.tweetList.map((tweet) => {
              <div className="d-flex flex-column p-3 border-bottom border-top border-1">
                <div className="d-flex gap-3">
                  <img
                    src="<%=userUrl.profilePicture  %>"
                    alt="Avatar del usuario <%=userUrl.username%>"
                    className="img_avatar"
                  />
                  <div className="d-flex flex-column">
                    <div className="d-flex gap-2 flex-column">
                      <h5>{user.username}</h5>
                      <span className="text-secondary">
                        @ {user.username} - formattedDate
                      </span>
                    </div>
                    <p> {tweet.content}</p>
                    <div className="d-flex justify-content-between">
                      <form
                        action="/tweet/like"
                        method="POST"
                        className="d-flex align-items-center gap-2"
                      >
                        <span className="text-pink">{tweet.likes.length}</span>
                        <input
                          type="hidden"
                          name="tweetInfo"
                          id="tweetInfo"
                          // value="<%=tweet._id%>"
                        />
                        {tweet.likes.includes(user._id)}
                        <button
                          type="submit"
                          style={{
                            backGround: "none",
                            border: "none",
                            padding: "0",
                          }}
                        >
                          <i
                            className="fa-solid fa-heart"
                            style={{ color: "#f91894" }}
                          ></i>
                        </button>

                        <button
                          type="submit"
                          style={{
                            backGround: "none",
                            border: "none",
                            padding: "0",
                          }}
                        >
                          <i
                            className="fa-regular fa-heart"
                            style={{ color: "#f91894" }}
                          ></i>
                        </button>
                      </form>

                      {user.tweetList.includes(tweet._id) && (
                        <form
                          action="/tweet/<%= tweet._id %>?_method=DELETE"
                          method="post"
                        >
                          <button
                            type="submit"
                            style={{
                              backGround: "none",
                              border: "none",
                              padding: "0",
                            }}
                          >
                            <i
                              className="fa-solid fa-trash"
                              style={{ color: "#dc3545" }}
                            ></i>
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              </div>;
            })}
          </main>
          <Aside />
        </div>
      )}
    </div>
  );
};
