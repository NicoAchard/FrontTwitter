import Sidebar from "../components/Sidebar";
import Aside from "../components/Aside";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTweets, toggleLike } from "../redux/tweetSlice";
import axios from "axios";
import { formatDistanceToNow, format } from "date-fns";

export default () => {
  const [user, setUser] = useState(null);
  const tweets = useSelector((state) => state.tweets);
  const token = useSelector((state) => state.user.token);
  const [inputTweet, setInputTweet] = useState("");
  const dispatch = useDispatch();

  const getUsernameShort = (username) => {
    const regex = /^[^@._-]+/;
    const match = username.match(regex);
    return match ? match[0] : username;
  };

  useEffect(() => {
    const fetchTweet = async () => {
      try {
        const options = {
          method: "GET",
          url: `${import.meta.env.VITE_API_URL}/tweets`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.request(options);

        dispatch(setTweets(response.data.tweets));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchFollowers = async () => {
      try {
        const options = {
          method: "GET",
          url: `${import.meta.env.VITE_API_URL}/usuarios/followers`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.request(options);
        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchFollowers();
    fetchTweet();
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
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      const options = {
        method: "POST",
        url: `${import.meta.env.VITE_API_URL}/tweets/`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          content: inputTweet,
        },
      };
      const response = await axios.request(options);
      console.log(response);
      dispatch(setTweets(response.data.tweets));
      setInputTweet("");
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
      {tweets && user ? (
        (console.log(tweets),
        console.log("-------------------------"),
        console.log(user),
        (
          <div className="row">
            <Sidebar user={user} />
            <main className="col-10 col-md-6 border border-2 p-0 d-flex flex-column">
              <div className="d-flex flex-column">
                <h1 className="h5 ms-2 mt-3">Home</h1>
                <form
                  className="w-100 d-flex flex-column gap-2 p-2"
                  onSubmit={handlerSubmit}
                >
                  <div className="w-100 d-flex gap-2">
                    <label htmlFor="content">
                      <img
                        src="/img/default_avatar.png"
                        alt="Avatar del usuario "
                        className="img-avatar rounded-circle"
                      />
                    </label>
                    <input
                      type="text"
                      name="content"
                      id="content"
                      className="form-control w-100 border-1"
                      placeholder="What's happening?"
                      value={inputTweet}
                      onChange={(e) => setInputTweet(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary rounded-5 align-self-end"
                    style={{
                      width: "80px",
                      backgroundColor: "#1d9bf0",
                      border: "none",
                    }}
                  >
                    Tweet
                  </button>
                </form>
              </div>
              {tweets.map((tweet) => (
                <div
                  className="d-flex flex-column p-3 border-bottom border-top border-1"
                  key={tweet._id}
                >
                  <div className="d-flex gap-3">
                    <img
                      src={tweet.author.profilePicture}
                      alt={`Avatar del usuario ${tweet.author.username}`}
                      className="img-avatar rounded-circle"
                    />
                    <div className="d-flex flex-column">
                      <div className="d-flex gap-2 flex-column">
                        <h5>{getUsernameShort(tweet.author.username)}</h5>
                        <span className="text-secondary">
                          @{getUsernameShort(tweet.author.username)} -{" "}
                          {handleDate(new Date(tweet.createdAt))}
                        </span>
                      </div>
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
                        <input
                          type="hidden"
                          name="tweetInfo"
                          id="tweetInfo"
                          value={tweet._id}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </main>
            <Aside />
          </div>
        ))
      ) : (
        <h3>Cargando...</h3>
      )}
    </div>
  );
};
