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
  detail,
}) => {
  const dispatch = useDispatch();

  const deleteRobot = () => {
    dispatch(deleteRobotThunk(_id));
  };

  const redirectDetails = () => {
    window.location.href = `/robots/${_id}`;
  };

  return (
    <StyledRobot className="robot">
      <StyledButton onClick={deleteRobot}>DELETE</StyledButton>
      {!detail && (
        <StyledButton onClick={redirectDetails}>MORE INFO</StyledButton>
      )}
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
        {detail && (
          <p>
            The {name} robot was born in {dateOfCreation.split("T")[0]}. Has a
            speed of {speed} and a strength of {strength}, both out of 10
            points.
          </p>
        )}
      </div>
    </StyledRobot>
  );
};

export default Robot;
