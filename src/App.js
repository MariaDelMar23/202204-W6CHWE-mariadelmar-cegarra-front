import { useEffect } from "react";
import { useDispatch } from "react-redux";
import RobotsList from "./components/RobotsList/RobotsList";
import { loadRobotsThunk } from "./thunks/robotsThunks";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    debugger;
    dispatch(loadRobotsThunk());
    debugger;
  }, [dispatch]);

  return (
    <div className="main-container">
      <img
        width="400px"
        heigth="400px"
        src="https://static.thenounproject.com/png/417113-200.png"
        alt="Happy robot"
      ></img>
      <p>Site in progress</p>
      <RobotsList />
    </div>
  );
}

export default App;
