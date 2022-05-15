import styled from "styled-components";

const StyledRobotsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  text-align: center;
  max-width: 100vw;
  flex-wrap: wrap;
  margin-left: 50px;
  li {
    display: flex;
  }
`;

export default StyledRobotsList;
