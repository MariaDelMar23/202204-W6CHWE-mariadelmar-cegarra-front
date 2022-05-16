import { useEffect } from "react";
import { useDispatch } from "react-redux";
import StyledHeading from "../components/Heading/StyledHeading";

import RobotsList from "../components/RobotsList/RobotsList";
import { loadRobotsThunk } from "../thunks/robotsThunks";

const RobotListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  return (
    <>
      <StyledHeading>Uncommon Robots</StyledHeading>
      <RobotsList />
    </>
  );
};

export default RobotListPage;
