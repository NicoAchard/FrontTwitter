import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    saveToken(state, action) {
      return { token: action.payload };
    },
    userLoggedId(state, action) {
      return { userLoggedId: action.payload };
    },
  },
});

const { actions, reducer } = userSlice;
export const { saveToken, userLoggedId } = actions;
export default reducer;
