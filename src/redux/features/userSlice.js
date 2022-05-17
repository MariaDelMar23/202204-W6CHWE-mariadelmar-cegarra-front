import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  ndame: "user",
  initialState: {},
  reducers: {
    logIn: (user, action) => ({ ...action.payload }),
    logOut: (user) => ({}),
  },
});

export default userSlice.reducer;

export const { logIn: logInActionCreator, logOut: logOutActionCreator } =
  userSlice.actions;
