import Robot from "./components/Robot/Robot";
import robotsData from "./Data/robotsData";

function App() {
  return (
    <div className="main-container">
      <img
        width="400px"
        heigth="400px"
        src="https://static.thenounproject.com/png/417113-200.png"
        alt="Happy robot"
      ></img>
      <p>Site in progress</p>

      <Robot robot={robotsData[0]} />
    </div>
  );
}

export default App;
