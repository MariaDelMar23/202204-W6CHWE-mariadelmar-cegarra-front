import robotData from "../../mocks/robotMock";
import robotsData from "../../mocks/robotsMock";
import robotsSlice, {
  addRobotActionCreator,
  deleteRobotActionCreator,
  loadRobotsActionCreator,
} from "./robotsSlice";

describe("Given the loadRobotsActionCreator", () => {
  describe("When it receives [] and the loadRobots action with an array of robots as payload", () => {
    test("Then it should return an array of robots", () => {
      const initialRobots = [];
      const robots = robotsData.robots;
      const action = loadRobotsActionCreator(robots);

      const currentRobots = robotsSlice(initialRobots, action);

      expect(currentRobots).toEqual(robots);
    });
  });
});

describe("Given the deleteRobotActionCreator", () => {
  describe("When it receives an array of robots and the deleteRobot action with an id as payload", () => {
    test("Then it should return an array of robots", () => {
      const robots = robotsData.robots;
      const id = "62801606fcfc53c9f6c3a600";
      const action = deleteRobotActionCreator(id);
      const expectedRobots = [
        {
          _id: "62801783fcfc53c9f6c3a601",
          name: "2B",
          features: {
            speed: 8,
            strength: 6,
            dateOfCreation: "2012-04-22T22:00:00.000Z",
          },
          image:
            "https://i.pinimg.com/originals/34/94/76/349476e8dd020e31dabe9b4c3d7d52d7.jpg",
        },
      ];

      const currentRobots = robotsSlice(robots, action);

      expect(currentRobots).toEqual(expectedRobots);
    });
  });
});

describe("Given the addRobot function", () => {
  describe("When it receives an array of robots and an action addRobot with a robot object as payload", () => {
    test("Then it should return a new array of robots with the previus and the new robot", () => {
      const previusRobots = robotsData.robots;
      const newRobot = robotData;
      const action = addRobotActionCreator(newRobot);
      const expectedRobots = [...previusRobots, newRobot];

      const currentRobots = robotsSlice(previusRobots, action);

      expect(currentRobots).toEqual(expectedRobots);
    });
  });
});
