import robotsData from "../../mocks/robotsMock";
import robotsSlice, { loadRobotsActionCreator } from "./robotsSlice";

describe("Given the loadRobotsActionCreator", () => {
  describe("When it receives [] and the loadRobots action with an array of robots by payload", () => {
    test("Then it should return an array of robots", () => {
      const initialRobots = [];
      const robots = robotsData.robots;
      const action = loadRobotsActionCreator(robots);

      const currentRobots = robotsSlice(initialRobots, action);

      expect(currentRobots).toEqual(robots);
    });
  });
});
