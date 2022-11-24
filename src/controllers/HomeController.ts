import { NextFunction, Request, Response } from "express";
import { renderHomepage } from "../services/HomeServices";

export const HomeController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  renderHomepage(req, res, next);
};
