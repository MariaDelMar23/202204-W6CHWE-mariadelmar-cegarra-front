import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Robot from "../components/Robot/Robot";
import { loadOneRobotThunk } from "../thunks/robotsThunks";

const RobotDetailsPage = () => {
  const { idRobot } = useParams();
  const dispatch = useDispatch();
  const robots = useSelector((state) => state.robots);

  useEffect(() => {
    dispatch(loadOneRobotThunk(idRobot));
  }, [idRobot, dispatch]);

  return <Robot robot={robots} details={true}></Robot>;
};

export default RobotDetailsPage;
