import { createSlice } from "@reduxjs/toolkit";

const robotsSlice = createSlice({
  name: "robots",
  initialState: [],
  reducers: {
    loadRobots: (robots, action) => [...action.payload],
    deleteRobot: (robots, action) =>
      robots.filter((robot) => robot._id !== action.payload),
  },
});

export default robotsSlice.reducer;

export const {
  loadRobots: loadRobotsActionCreator,
  deleteRobot: deleteRobotActionCreator,
} = robotsSlice.actions;
