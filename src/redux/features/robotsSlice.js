import { createSlice } from "@reduxjs/toolkit";

const robotsSlice = createSlice({
  name: "robots",
  initialState: [],
  reducers: {
    loadRobots: (robots, action) => [...robots, ...action.payload],
  },
});

export default robotsSlice.reducer;

export const { loadRobots: loadRobotsActionCreator } = robotsSlice.actions;
