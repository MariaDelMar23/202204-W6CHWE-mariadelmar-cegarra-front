import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StyledButton from "./StyledButton";

describe("Given the StyledButton component", () => {
  describe("When it renders", () => {
    test("It should render a button with the text given", () => {
      const expectedText = "DELETE";

      render(<StyledButton>DELETE</StyledButton>);
      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it's clicked", () => {
    test("Then it should call the action given", () => {
      const action = jest.fn();
      const expectedText = "DELETE";

      render(<StyledButton onClick={action}>DELETE</StyledButton>);
      const button = screen.getByRole("button", { name: expectedText });
      userEvent.click(button);

      expect(action).toHaveBeenCalled();
    });
  });
});
