import { useDispatch } from "react-redux";
import { deleteRobotThunk } from "../../thunks/robotsThunks";
import StyledButton from "../Button/StyledButton";
import StyledRobot from "./StyleRobot";

const Robot = ({ robot: { _id, name, image } }) => {
  const dispatch = useDispatch();

  const deleteRobot = () => {
    dispatch(deleteRobotThunk(_id));
  };

  return (
    <StyledRobot className="robot">
      <h3 className="robot__title">{name}</h3>
      <img className="robot__img" width="200px" src={image} alt={name}></img>
      <StyledButton onClick={deleteRobot}>DELETE</StyledButton>
    </StyledRobot>
  );
};

export default Robot;
