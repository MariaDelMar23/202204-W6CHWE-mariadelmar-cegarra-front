import styled from "styled-components";

const StyledRobot = styled.div`
  display: inline;
  display: block;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
  border-radius: 7px;
  background: rgb(126, 207, 255);
  background: linear-gradient(
    90deg,
    rgba(126, 207, 255, 1) 20%,
    rgba(182, 164, 245, 1) 80%
  );
  .robot__title {
    margin: 30px;
    font-size: 50px;
    font-weight: bold;
    color: #1f193a;
  }
  .robot__img {
    margin: 30px;
    border-radius: 7px;
  }
`;
export default StyledRobot;
