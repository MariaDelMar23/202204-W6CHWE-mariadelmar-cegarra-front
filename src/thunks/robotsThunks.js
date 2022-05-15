import axios from "axios";
import {
  deleteRobotActionCreator,
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

export const deleteRobotThunk = (id) => async (dispatch) => {
  try {
    const { status } = await axios.delete(`${urlApi}/${id}`);

    if (status === 200) {
      dispatch(deleteRobotActionCreator(id));
    }
  } catch (error) {
    return error.message;
  }
};
