import axios from "axios";
import {
  addRobotActionCreator,
  deleteRobotActionCreator,
  loadOneRobotActionCreator,
  loadRobotsActionCreator,
} from "../redux/features/robotsSlice";

const urlApi = process.env.REACT_APP_URL_API;

export const loadRobotsThunk = () => async (dispatch) => {
  try {
    const { data: robots, status } = await axios.get(urlApi);

    if (status === 200) {
      dispatch(loadRobotsActionCreator(robots.robots));
    }
  } catch (error) {
    return error.message;
  }
};

export const loadOneRobotThunk = (id) => async (dispatch) => {
  try {
    const { data: robot, status } = await axios.get(`${urlApi}/${id}`);

    if (status === 200) {
      dispatch(loadOneRobotActionCreator(robot));
    }
  } catch (error) {
    return error.message;
  }
};

export const deleteRobotThunk = (id) => async (dispatch) => {
  try {
    const { status } = await axios.delete(`${urlApi}/delete/${id}`);

    if (status === 200) {
      dispatch(deleteRobotActionCreator(id));
    }
  } catch (error) {
    return error.message;
  }
};

export const addRobotThunk = (robot) => async (dispatch) => {
  try {
    const { status } = await axios.post(`${urlApi}/create`, robot);

    if (status === 201) {
      dispatch(addRobotActionCreator(robot));
    }
  } catch (error) {
    return error.message;
  }
};
