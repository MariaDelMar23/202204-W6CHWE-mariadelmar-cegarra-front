import axios from "axios";
import { loadRobotsActionCreator } from "../redux/features/robotsSlice";

const urlApi = process.env.REACT_APP_URL_API;

const loadRobotsThunk = async (dispatch) => {
  const { data: robots } = await axios.get(urlApi);
  dispatch(loadRobotsActionCreator(robots));
};

export default loadRobotsThunk;
