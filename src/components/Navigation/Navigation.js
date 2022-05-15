import { NavLink } from "react-router-dom";
import StyledNavigation from "./StyledNavigation";

const Navigation = () => {
  return (
    <StyledNavigation className="main-navigation">
      <ul>
        <li>
          <NavLink to="/robots">See Robots</NavLink>
        </li>
        <li>
          <NavLink to="/createRobot">Add new Robot</NavLink>
        </li>
      </ul>
    </StyledNavigation>
  );
};
export default Navigation;
