import { ErrorRequestHandler, Request, Response } from "express";

export const errorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response
) => {
  const status =
    err?.status ||
    err?.response?.status ||
    (err?.name && err?.message === "ValidationError" ? 400 : 500);
  res.status(status).send({ message: err?.message || err?.response?.message });
};
