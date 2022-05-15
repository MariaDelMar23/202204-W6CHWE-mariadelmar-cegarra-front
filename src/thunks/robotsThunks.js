import axios from "axios";
import { loadRobotsActionCreator } from "../redux/features/robotsSlice";

const urlApi = process.env.REACT_APP_URL_API;
const apiKey = process.env.API_KEY;

export const loadRobotsThunk = () => async (dispatch) => {
  try {
    const { data: robots, status } = await axios.get(
      `${urlApi}?token=${apiKey}`
    );

    if (status === 200) {
      dispatch(loadRobotsActionCreator(robots.robots));
    }
  } catch (error) {
    return error.message;
  }
};

export const a = 3;
