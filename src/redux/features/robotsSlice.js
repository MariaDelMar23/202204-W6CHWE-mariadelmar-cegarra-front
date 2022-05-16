import { createSlice } from "@reduxjs/toolkit";

const robotsSlice = createSlice({
  name: "robots",
  initialState: [],
  reducers: {
    loadRobots: (robots, action) => [...action.payload],
    loadOneRobot: (robots, action) => [{ ...action.payload }],
    deleteRobot: (robots, action) =>
      robots.filter((robot) => robot._id !== action.payload),
    addRobot: (robots, action) => [...robots, action.payload],
  },
});

export default robotsSlice.reducer;

export const {
  loadRobots: loadRobotsActionCreator,
  loadOneRobot: loadOneRobotActionCreator,
  deleteRobot: deleteRobotActionCreator,
  addRobot: addRobotActionCreator,
} = robotsSlice.actions;
