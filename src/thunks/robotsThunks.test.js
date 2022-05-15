import robotsData from "../mocks/robotsMock";
import { loadRobotsActionCreator } from "../redux/features/robotsSlice";
import { loadRobotsThunk } from "./robotsThunks";

describe("Given the loadRobotsThunk function", () => {
  describe("When its invoked", () => {
    test("Then it should call the function dispatch with the loadRobotsActionCreator", async () => {
      const dispatch = jest.fn();
      const loadRobotsThunkTest = loadRobotsThunk();
      const expectedAction = loadRobotsActionCreator(robotsData.robots);

      await loadRobotsThunkTest(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
