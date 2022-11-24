import { Router, IRouter, Response, Request } from "express";
import expressAsyncHandler from "express-async-handler";

export const HomeRouter: IRouter = Router();

HomeRouter.get(
  "/",
  expressAsyncHandler(async (req: Request, res: Response) => {
    res.send("<h1>Hello World!</h1>");
  })
);
