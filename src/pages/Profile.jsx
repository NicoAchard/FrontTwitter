import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "../components/Sidebar";
import Aside from "../components/Aside";
import { formatDistanceToNow, format } from "date-fns";

export default () => {
  const params = useParams();
  const dispatch = useDispatch();

  const [userProfile, setUserProfile] = useState(null);
  const [tweetsProfile, setTweetsProfile] = useState(null);
  const token = useSelector((state) => state.user.token);
  const userLoggedUsername = useSelector((state) => state.user.username);
  const userLoggedId = useSelector((state) => state.user.id);
  const getUsernameShort = (username) => {
    const regex = /^[^@._-]+/;
    const match = username.match(regex);
    return match ? match[0] : username;
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_API_URL}/usuarios/${params.username}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserProfile(response.data.user);
        setTweetsProfile(response.data.user.tweetList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchUserProfile();
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

      //cambiar el estado de like en la aplicacion
      const userProfileUpdateLike = { ...userProfile };
      tweetsProfile.map((tweet) => {
        if (tweet._id === tweetId) {
          if (tweet.likes.includes(userLoggedId)) {
            tweet.likes = tweet.likes.filter((id) => id !== userLoggedId);
          } else {
            tweet.likes.push(userLoggedId);
          }
        }
      });

      setTweetsProfile(userProfileUpdateLike);

      await axios.request(options);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handlerDelete = async (tweetId) => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `${import.meta.env.VITE_API_URL}/tweets/${tweetId}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      //cambiar el estado de borrar en la aplicacion
      let userProfileDeleteTweet = tweetsProfile.filter(
        (tweet) => tweet._id !== tweetId
      );
      console.log(userProfileDeleteTweet);

      setTweetsProfile(userProfileDeleteTweet);

      if (response.status === 200) {
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  function handleDate(tweetDate) {
    const differenceInHours = Math.abs(new Date() - tweetDate) / 36e5; // Diferencia en horas

    let formattedDate;

    if (differenceInHours < 24) {
      formattedDate = formatDistanceToNow(tweetDate, {
        addSuffix: true,
        includeSeconds: true,
      });
    } else {
      formattedDate = format(tweetDate, "MMM dd");
    }
    return formattedDate;
  }

  return (
    <div className="container-fluid container-lg">
      {userProfile && (
        <div className="row">
          <Sidebar user={userLoggedUsername} />
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
                    src={userProfile.profilePicture}
                    alt="Avatar del usuario"
                    className="img_avatar_perfil border-5 border border-white"
                  />

                  {userProfile.username !== userLoggedUsername && (
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
                  )}
                </div>
                <h1 className="h6">
                  {" "}
                  {getUsernameShort(userProfile.username)}
                </h1>
              </div>
            </div>
            <div
              className="d-flex justify-content-between px-2 position-relative"
              style={{ bottom: "60px" }}
            >
              <div>
                <small className="text-muted">
                  @{getUsernameShort(userProfile.username)}{" "}
                </small>
              </div>
              <div>
                <small>
                  <span className="text-dark fw-bold">
                    {" "}
                    {userProfile.following.length}{" "}
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
                    {userProfile.followers.length}{" "}
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
            {tweetsProfile.map((tweet) => (
              <div
                className="d-flex flex-column p-3 border-bottom border-top border-1"
                key={tweet._id}
              >
                <div className="d-flex gap-3">
                  <img
                    src={userProfile.profilePicture}
                    alt={`Avatar del usuario ${userProfile.username}`}
                    className="img-avatar rounded-circle"
                  />

                  <div className="d-flex flex-column w-100">
                    <div className="d-flex flex-column">
                      <h5 className="m-0">
                        {getUsernameShort(userProfile.username)}
                      </h5>
                      <span
                        className="text-secondary"
                        style={{ fontSize: "0.9rem" }}
                      >
                        @{getUsernameShort(userProfile.username)} -{" "}
                        {handleDate(new Date(tweet.createdAt))}
                      </span>
                    </div>
                    <p> {tweet.content}</p>
                    <div className="d-flex justify-content-between">
                      <span className="text-pink d-flex align-items-center gap-1">
                        {tweet.likes.includes(userProfile.id) ? (
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
                        {tweetsProfile.some(
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
