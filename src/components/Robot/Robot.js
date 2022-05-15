import { useDispatch } from "react-redux";
import { deleteRobotThunk } from "../../thunks/robotsThunks";
import StyledButton from "../Button/StyledButton";
import StyledRobot from "./StyleRobot";

const Robot = ({
  robot: {
    _id,
    name,
    image,
    features: { speed, strength, dateOfCreation },
  },
}) => {
  const dispatch = useDispatch();

  const deleteRobot = () => {
    dispatch(deleteRobotThunk(_id));
  };

  return (
    <StyledRobot className="robot">
      <StyledButton onClick={deleteRobot}>DELETE</StyledButton>
      <h3 className="robot__title">{name}</h3>
      <div className="robot-info">
        <div className="image">
          <img
            className="robot__img"
            widht="200px"
            src={image}
            alt={name}
          ></img>
        </div>
        <div className="features">
          <h4 className="features__title">Features</h4>
          <p>Speed: {speed}</p>
          <p>Strength: {strength}</p>
          <p>Date of creation: {dateOfCreation.split("T")[0]}</p>
        </div>
      </div>
    </StyledRobot>
  );
};

export default Robot;
