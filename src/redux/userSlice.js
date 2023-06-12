import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    saveToken(state, action) {
      return { ...state, token: action.payload };
    },
    setUserData(state, action) {
      return {
        ...state,
        following: action.payload.following,
        username: action.payload.username,
        id: action.payload.id,
      };
    },
  },
});

const { actions, reducer } = userSlice;
export const { saveToken, setUserData } = actions;
export default reducer;
