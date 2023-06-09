import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import tweetReducer from "./tweetSlice.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    tweets: tweetReducer,
  },
});

export default store;
