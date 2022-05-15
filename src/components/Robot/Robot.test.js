import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import robotsData from "../../mocks/robotsMock";
import store from "../../redux/store/store";
import Robot from "./Robot";

describe("Given the Robot component", () => {
  describe("When it renders receiving a robot object", () => {
    test("Then it should render a heading with 'Mark Zuckeberg' with style", () => {
      const expectedHeading = "Mark Zuckeberg";
      const expectedStyle = `margin: 30px;
      font-size: 50px;
      font-weight: bold;
      color: #1f193a;`;

      render(
        <Provider store={store}>
          <Robot robot={robotsData.robots[0]} />
        </Provider>
      );
      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
      expect(heading).toHaveStyle(expectedStyle);
    });

    test("Then it should render an image with an alt text 'Mark Zuckeberg' with style", () => {
      const expectedAlt = "Mark Zuckeberg";
      const expectedStyle = `margin: 30px;
      border-radius: 7px;`;

      render(
        <Provider store={store}>
          <Robot robot={robotsData.robots[0]} />
        </Provider>
      );
      const image = screen.getByRole("img", { name: expectedAlt });

      expect(image).toBeInTheDocument();
      expect(image).toHaveStyle(expectedStyle);
    });
  });
});
