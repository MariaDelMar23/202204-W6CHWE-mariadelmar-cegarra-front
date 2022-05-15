import { rest } from "msw";
import robotsData from "./robotsMock";

const urlApi = process.env.REACT_APP_URL_API;
const idRobot = "62801606fcfc53c9f6c3a600";

export const handlers = [
  rest.get(urlApi, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(robotsData));
  }),
  rest.delete(urlApi + idRobot, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ msg: `Deleted robot with Id ${idRobot}` })
    );
  }),
  rest.post(urlApi, (req, res, ctx) => {
    return res(ctx.status(201), ctx.json(req.body));
  }),
];
