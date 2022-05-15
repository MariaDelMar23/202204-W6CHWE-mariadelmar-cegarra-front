import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import Form from "./Form";

describe("Given the Form component", () => {
  describe("When it renders", () => {
    test("Then it should render a list", () => {
      render(
        <Provider store={store}>
          <Form />
        </Provider>
      );

      const list = screen.getByRole("list");

      expect(list).toBeInTheDocument();
    });

    test("Then it should render a listitem", () => {
      const expectNumberOfLists = 5;

      render(
        <Provider store={store}>
          <Form />
        </Provider>
      );

      const list = screen.getAllByRole("listitem");

      expect(list).toHaveLength(expectNumberOfLists);
    });
  });
});
