import axios from "axios";
import { loadRobotsActionCreator } from "../redux/features/robotsSlice";

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

export const a = 3;
