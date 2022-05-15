import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Form from "../components/Form/Form";
import RobotsList from "../components/RobotsList/RobotsList";
import { loadRobotsThunk } from "../thunks/robotsThunks";

const StyledHeading = styled.h2`
  font-size: 70px;
  font-weight: bold;
  color: #1f193a;
  margin: 50px;
  margin-left: 90px;
`;

const RobotListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsThunk());
  }, [dispatch]);

  return (
    <>
      <StyledHeading>Uncommon Robots</StyledHeading>
      <RobotsList />
      <Form />
    </>
  );
};

export default RobotListPage;
