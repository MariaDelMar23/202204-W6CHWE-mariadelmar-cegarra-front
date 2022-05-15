import { useEffect } from "react";
import { useDispatch } from "react-redux";
import RobotsList from "./components/RobotsList/RobotsList";
import { loadRobotsThunk } from "./thunks/robotsThunks";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  return (
    <div className="main-container">
      <img
        width="400px"
        heigth="400px"
        src="https://static.thenounproject.com/png/417113-200.png"
        alt="Happy robot"
      ></img>
      <RobotsList />
      <p>Site in progress</p>
    </div>
  );
}

export default App;
