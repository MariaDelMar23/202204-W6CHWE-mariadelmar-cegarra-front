import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import RobotsList from "./RobotsList";

describe("Given the RobotsList component", () => {
  describe("When it renders", () => {
    test("Then it should render a list", () => {
      render(
        <Provider store={store}>
          <RobotsList />
        </Provider>
      );
      const robotsList = screen.getByRole("list");

      expect(robotsList).toBeInTheDocument();
    });

    test("Then it should have style", ()=> {
      const expectedStyle=`
      list-style: none;
    `
    render(
      <Provider store={store}>
        <RobotsList />
      </Provider>
    );
    const robotsList = screen.getByRole("list");

    expect(robotsList).toHaveStyle(expectedStyle);
    })
  });
});
