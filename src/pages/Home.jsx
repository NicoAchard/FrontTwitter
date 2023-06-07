import Sidebar from "../components/Sidebar";
import Aside from "../components/Aside";

export default () => {
  // esta variable es provisional
  const tweet = null;

  return (
    <div className="container-fluid container-lg">
      <div className="row">
        <Sidebar />
        <main className="col-10 col-md-6 border border-2 p-0 d-flex flex-column">
          <div className="d-flex flex-column">
            <h1 className="h5 ms-2 mt-3">Home</h1>
            <form
              action="/tweet/"
              method="post"
              className="w-100 d-flex flex-column gap-2 p-2"
            >
              <div className="w-100 d-flex gap-2">
                <label for="content">
                  <img
                    src="/img/default_avatar.png"
                    alt="Avatar del usuario ???"
                    className="img_avatar"
                  />
                </label>
                <input
                  type="text"
                  name="content"
                  id="content"
                  className="form-control w-100 border-1"
                  placeholder="What's happening?"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary rounded-5 align-self-end"
                style="width: 80px; background-color: #1d9bf0; border: none"
                id="submitTweetButton"
              >
                Tweet
              </button>
            </form>
          </div>
          {/* <% for(tweet of tweets) { %> */}
          <div className="d-flex flex-column p-3 border-bottom border-top border-1">
            <div className="d-flex gap-3">
              <img
                src="<%= tweet.author.profilePicture %>"
                alt="Avatar del usuario <%=tweet.author.username%>"
                className="img_avatar"
              />
              <div className="d-flex flex-column">
                <div className="d-flex gap-2 flex-column">
                  <h5>{tweet.author.username}</h5>
                  <span className="text-secondary">
                    @ {tweet.author.username} - {tweet.createdAt}{" "}
                  </span>
                </div>
                <p> {tweet.content}</p>
                <div className="d-flex justify-content-between">
                  <form
                    action="/tweet/like"
                    method="POST"
                    className="d-flex align-items-center gap-2"
                  >
                    <span className="text-pink"> {tweet.likes.length}</span>
                    <input
                      type="hidden"
                      name="tweetInfo"
                      id="tweetInfo"
                      value="<%=tweet._id%>"
                    />
                    {tweet.likes.includes(user._id) ? (
                      <button
                        type="submit"
                        style="background: none; border: none; padding: 0"
                      >
                        <i
                          className="fa-solid fa-heart"
                          style="color: #f91894"
                        ></i>
                      </button>
                    ) : (
                      <button
                        type="submit"
                        style="background: none; border: none; padding: 0"
                      >
                        <i
                          className="fa-regular fa-heart"
                          style="color: #f91894"
                        ></i>
                      </button>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <% } %> */}
        </main>
        <Aside />
      </div>
    </div>
  );
};
