import { useSelector } from "react-redux";
import Robot from "../Robot/Robot";
import StyledRobotsList from "./StyledRobotsList";

const RobotsList = () => {
  const robots = useSelector((state) => state.robots);

  return (
    <StyledRobotsList className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
      {robots.map((robot) => (
        <li key={robot._id} className="col">
          <Robot robot={robot} />
        </li>
      ))}
    </StyledRobotsList>
  );
};

export default RobotsList;
