import StyledRobot from "./StyleRobot";

const Robot = ({ robot: { name, image } }) => {
  return (
    <StyledRobot className="robot">
      <h3 className="robot__title">{name}</h3>
      <img className="robot__img" width="200px" src={image} alt={name}></img>
    </StyledRobot>
  );
};

export default Robot;
