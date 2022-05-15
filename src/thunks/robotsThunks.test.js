import robotsData from "../mocks/robotsMock";
import {
  deleteRobotActionCreator,
  loadRobotsActionCreator,
} from "../redux/features/robotsSlice";
import { deleteRobotThunk, loadRobotsThunk } from "./robotsThunks";

describe("Given the loadRobotsThunk function", () => {
  describe("When its invoked", () => {
    test("Then it should call the function dispatch with the loadRobotsActionCreator", async () => {
      const dispatch = jest.fn();
      const loadRobotsThunkTest = loadRobotsThunk();
      const expectedAction = loadRobotsActionCreator(robotsData.robots);

      await loadRobotsThunkTest(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });

    test("Then it should call the function dispatch with the deleteRobotActionCreator", async () => {
      const dispatch = jest.fn();
      const idRobot = "62801606fcfc53c9f6c3a600";
      const deleteRobotThunkTest = deleteRobotThunk(idRobot);
      const expectedAction = deleteRobotActionCreator(idRobot);

      await deleteRobotThunkTest(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
