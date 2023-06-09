import { createSlice } from "@reduxjs/toolkit";

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: null,
  reducers: {
    setTweets(state, action) {
      return action.payload;
    },
    toggleLike(state, action) {
      const tweet = state.find((item) => item._id === action.payload.tweetId);
      const existAlreadyLikes = tweet.likes.some(
        (item) => item.toString() === action.payload.userId
      );
      console.log(existAlreadyLikes);
      if (existAlreadyLikes) {
        tweet.likes = tweet.likes.filter(
          (item) => item !== action.payload.userId
        );
      } else {
        tweet.likes.push(action.payload.userId);
      }
    },
  },
});

const { actions, reducer } = tweetsSlice;
export const { setTweets, toggleLike } = actions;
export default reducer;
