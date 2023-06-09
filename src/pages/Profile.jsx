import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setTweets, toggleLike } from "../redux/tweetSlice";
import Sidebar from "../components/Sidebar";
import Aside from "../components/Aside";

export default () => {
  const [user, setUser] = useState(null);
  const tweets = useSelector((state) => state.tweets);
  const params = useParams();
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const getUsernameShort = (username) => {
    const regex = /^[^@._-]+/;
    const match = username.match(regex);
    return match ? match[0] : username;
  };

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
        dispatch(setTweets(response.data.tweetList));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchProfile();
  }, []);

  async function handlerLike(tweetId) {
    try {
      const options = {
        method: "POST",
        url: `${import.meta.env.VITE_API_URL}/tweets/like`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          tweetId,
        },
      };

      dispatch(toggleLike({ tweetId, userId: user._id }));
      const response = await axios.request(options);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handlerDelete = async (paramId) => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `${import.meta.env.VITE_API_URL}/tweets/${paramId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container-fluid container-lg">
      {user && (
        <div className="row">
          <Sidebar user={user} />
          <main className="col-10 col-md-6 border border-2 p-0 d-flex flex-column">
            <div
              className="w-100"
              style={{ height: "150px", backgroundColor: "rgb(29, 155, 240)" }}
            ></div>
            <div className="d-flex justify-content-between px-2">
              <div
                className="d-flex flex-column position-relative gap-2 w-100
                "
                style={{ bottom: "50px" }}
              >
                <div className="d-flex position-relative justify-content-between align-items-center">
                  <img
                    src={user.profilePicture}
                    alt="Avatar del usuario"
                    className="img_avatar_perfil border-5 border border-white"
                  />
                  <Link
                    to=""
                    className="btn btn-primary rounded-pill d-flex align-items-center justify-content-center position-absolute end-0 bottom-0"
                    style={{
                      backgroundColor: "#1d9bf0",
                      border: "none",
                      width: "100px",
                      height: "40px",
                    }}
                  >
                    Follow
                  </Link>
                </div>
                <h1 className="h6"> {getUsernameShort(user.username)}</h1>
              </div>
            </div>
            <div
              className="d-flex justify-content-between px-2 position-relative"
              style={{ bottom: "60px" }}
            >
              <div>
                <small className="text-muted">
                  @{getUsernameShort(user.username)}{" "}
                </small>
              </div>
              <div>
                <small>
                  <span className="text-dark fw-bold">
                    {" "}
                    {user.following.length}{" "}
                  </span>
                  <Link
                    to="/following"
                    className="text-secondary"
                    style={{ textDecoration: "none" }}
                  >
                    Following
                  </Link>
                </small>
                <small>
                  <span className="text-dark fw-bold">
                    {" "}
                    {user.followers.length}{" "}
                  </span>
                  <Link
                    to="/followers"
                    className="text-secondary"
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
            {user.tweetList.map((tweet) => (
              <div
                className="d-flex flex-column p-3 border-bottom border-top border-1"
                key={tweet._id}
              >
                <div className="d-flex gap-3">
                  <img
                    src={user.profilePicture}
                    alt={`Avatar del usuario ${user.username}`}
                    className="img-avatar rounded-circle"
                  />
                  <div className="d-flex flex-column w-100">
                    <p> {tweet.content}</p>
                    <div className="d-flex justify-content-between">
                      <span className="text-pink d-flex align-items-center gap-1">
                        {tweet.likes.includes(user._id) ? (
                          <i
                            className="bi bi-heart-fill"
                            onClick={() => handlerLike(tweet._id)}
                            style={{ color: "#f91894", cursor: "pointer" }}
                          ></i>
                        ) : (
                          <i
                            className="bi bi-heart"
                            onClick={() => handlerLike(tweet._id)}
                            style={{ cursor: "pointer" }}
                          ></i>
                        )}
                        {tweet.likes.length}
                      </span>

                      <span className="text-pink d-flex align-items-center gap-1">
                        {user.tweetList.some(
                          (item) => item._id === tweet._id
                        ) && (
                          <FontAwesomeIcon
                            style={{ color: "#dc3545", cursor: "pointer" }}
                            onClick={() => handlerDelete(tweet._id)}
                            icon="fa-solid fa-trash"
                          />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </main>
          <Aside />
        </div>
      )}
    </div>
  );
};
