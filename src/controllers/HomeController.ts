import { Response, Request } from "express";

export const HomeController = async (req: Request, res: Response) => {
  res.send("<h1>Hello World!</h1>");
};
