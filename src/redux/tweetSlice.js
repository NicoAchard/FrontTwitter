import { createSlice } from "@reduxjs/toolkit";

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: null,
  reducers: {
    setTweets(state, action) {
      return action.payload;
    },

    addTweets(state, action) {
      const newState = [...state, action.payload];
      newState.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      return newState;
    },

    toggleLike(state, action) {
      const tweet = state.find((item) => item._id === action.payload.tweetId);
      const existAlreadyLikes = tweet.likes.some(
        (item) => item.toString() === action.payload.userId
      );

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
export const { setTweets, toggleLike, addTweets } = actions;
export default reducer;
