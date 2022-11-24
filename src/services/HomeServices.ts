import { NextFunction, Request, Response } from "express";

export const renderHomepage = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("<h1>Hello World!</h1>");
};
