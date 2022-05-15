import { rest } from "msw";
import robotsData from "./robotsMock";

export const handlers = [
  rest.get(process.env.REACT_APP_URL_API, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(robotsData));
  }),
];
