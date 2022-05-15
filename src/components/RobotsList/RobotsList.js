import { useSelector } from "react-redux";
import Robot from "../Robot/Robot";
import StyledRobotsList from "./StyledRobotsList";

const RobotsList = () => {
  const robots = useSelector((state) => state.robots);

  return (
    <StyledRobotsList>
      {robots.map((robot) => (
        <li key={robot._id}>
          <Robot robot={robot} />
        </li>
      ))}
    </StyledRobotsList>
  );
};

export default RobotsList;
