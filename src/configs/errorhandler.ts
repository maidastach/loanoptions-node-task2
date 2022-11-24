import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export const errorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err?.name && err?.message === "ValidationError" ? 400 : 500;
  res.status(status).send({ message: err?.message });
};
