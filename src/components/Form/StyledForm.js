import styled from "styled-components";

const StyledForm = styled.form`
  display: inline;
  display: block;
  flex-direction: row;
  text-align: center;
  width: 700px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
  margin-left: 95px;
  margin: 50px;
  border-radius: 7px;
  background: rgb(126, 207, 255);
  background: linear-gradient(
    90deg,
    rgba(126, 207, 255, 1) 20%,
    rgba(182, 164, 245, 1) 80%
  );
  ul {
    width: 380px;
    list-style: none;
    margin-left: 120px;
  }
  li {
    display: flex;
    justify-content: space-between;
    margin: 20px;
  }
  label {
    font-size: 25px;
    color: #1f193a;
  }
  input {
    height: 37px;
  }
  .form-button {
    --primary-color: #645bff;
    --secondary-color: #fff;
    --hover-color: #111;
    box-sizing: border-box;
    margin: 30px;
    border: 0;
    border-radius: 20px;
    color: var(--secondary-color);
    padding: 1em 1.8em;
    margin-left: 275px;
    background: var(--primary-color);
    display: flex;
    transition: 0.2s background;
    align-items: center;
    gap: 0.6em;
    font-weight: bold;
    &:hover {
      background-color: var(--hover-color);
    }
  }
`;
export default StyledForm;
