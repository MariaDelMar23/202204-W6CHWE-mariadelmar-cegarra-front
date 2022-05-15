import styled from "styled-components";

const StyledButton = styled.button`
  --primary-color: #645bff;
  --secondary-color: #fff;
  --hover-color: #111;
  box-sizing: border-box;
  margin: 30px;
  border: 0;
  border-radius: 20px;
  color: var(--secondary-color);
  padding: 1em 1.8em;
  margin-left: 78px;
  background: var(--primary-color);
  display: flex;
  transition: 0.2s background;
  align-items: center;
  gap: 0.6em;
  font-weight: bold;
  &:hover {
    background-color: var(--hover-color);
  }
`;
export default StyledButton;
