import axios from "axios";
import jwtDecode from "jwt-decode";
import { logInActionCreator } from "../redux/features/userSlice";

const logInThunk = (userData) => async (dispatch) => {
  const url =
    "https://two02204-w6chwe-mariadelmar-cegarra-back.onrender.com/user/login";
  const { data } = await axios.post(url, userData);
  const userInfo = jwtDecode(data.token);
  localStorage.setItem("token", data.token);
  dispatch(logInActionCreator(userInfo));
};

export default logInThunk;
