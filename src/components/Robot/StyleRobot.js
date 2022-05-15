import styled from "styled-components";

const StyledRobot = styled.div`
  display: inline;
  display: block;
  flex-direction: row;
  width: 700px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
  margin: 50px;
  border-radius: 7px;
  background: rgb(126, 207, 255);
  background: linear-gradient(
    90deg,
    rgba(126, 207, 255, 1) 20%,
    rgba(182, 164, 245, 1) 80%
  );
  .robot-info {
    display: flex;
    flex-direction: row;
  }
  .robot__title {
    margin: 30px;
    font-size: 50px;
    font-weight: bold;
    color: #1f193a;
  }
  .robot__img {
    width: 300px;
    max-width: 300px;
    margin: 30px;
    border-radius: 7px;
  }
  .features {
    text-align: left;
  }
  h4 {
    font-size: 40px;
    color: #1f193a;
  }
  p {
    font-size: 30px;
    color: #1f193a;
  }
  button {
    position: relative;
    top: -25px;
    left: 510px;
  }
`;
export default StyledRobot;
