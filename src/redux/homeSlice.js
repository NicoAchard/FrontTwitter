import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: [],
  reducers: {
    showHome(state, action) {
      return state;
    },
  },
});

const { actions, reducer } = homeSlice;
export const { showHome } = actions;
export default reducer;
