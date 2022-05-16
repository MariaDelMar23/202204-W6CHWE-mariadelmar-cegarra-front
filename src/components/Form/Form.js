import { useState } from "react";
import { useDispatch } from "react-redux";
import { addRobotThunk } from "../../thunks/robotsThunks";
import StyledForm from "./StyledForm";

const Form = () => {
  const [newName, setNewName] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newSpeed, setNewSpeed] = useState(0);
  const [newStrength, setNewStrength] = useState(0);
  const [newDateOfCreation, setNewdateOfCreation] = useState(new Date(0));
  const dispatch = useDispatch();

  const changeNewName = (event) => {
    setNewName(event.target.value);
  };
  const changeNewImage = (event) => {
    setNewImage(event.target.value);
  };
  const changeNewSpeed = (event) => {
    setNewSpeed(+event.target.value);
  };
  const changeNewStrength = (event) => {
    setNewStrength(+event.target.value);
  };
  const changeNewDateOfCreation = (event) => {
    setNewdateOfCreation(event.target.value);
  };

  const clearForm = (event) => {
    setNewName("");
    setNewImage("");
    setNewSpeed(0);
    setNewStrength(0);
    setNewdateOfCreation(new Date(0));
  };

  const addRobot = (event) => {
    event.preventDefault();
    dispatch(
      addRobotThunk({
        name: newName,
        image: newImage,
        features: {
          speed: newSpeed,
          strength: newStrength,
          dateOfCreation: newDateOfCreation,
        },
      })
    );
    clearForm();
    window.location.href = "/robots";
  };

  return (
    <>
      <StyledForm action="addRobot">
        <ul>
          <li>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" onChange={changeNewName} />
          </li>
          <li>
            <label htmlFor="image">Image (URL)</label>
            <input id="image" type="text" onChange={changeNewImage} />
          </li>
          <li>
            <label htmlFor="features-speed">Speed</label>
            <input
              id="features-speed"
              type="number"
              onChange={changeNewSpeed}
            />
          </li>
          <li>
            <label htmlFor="features-strength">Strength</label>
            <input
              id="features-strength"
              type="number"
              onChange={changeNewStrength}
            />
          </li>
          <li>
            <label htmlFor="features-dateOfCreation">Date of creation</label>
            <input
              id="features-dateOfCreation"
              type="date"
              onChange={changeNewDateOfCreation}
            />
          </li>
        </ul>
        <input
          className="form-button"
          type="submit"
          value="ADD ROBOT"
          onClick={addRobot}
        />
      </StyledForm>
    </>
  );
};

export default Form;
