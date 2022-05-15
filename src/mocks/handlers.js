import { rest } from "msw";
import robotsData from "./robotsMock";

const idRobot = "62801606fcfc53c9f6c3a600";

export const handlers = [
  rest.get(process.env.REACT_APP_URL_API, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(robotsData));
  }),
  rest.delete(process.env.REACT_APP_URL_API + idRobot, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ msg: `Deleted robot with Id ${idRobot}` })
    );
  }),
];
