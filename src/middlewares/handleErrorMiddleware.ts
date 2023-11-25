import { Request, Response, NextFunction } from "express";
import ServerError from "../utils/ServerError";

const handleErrorMiddleware = (
  error: ServerError | any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = error instanceof ServerError ? error.status : 500;
  const message =
    error instanceof ServerError || error instanceof Error
      ? error.message
      : "Internal Server Error";

  res.status(status).send(message);
};

export default handleErrorMiddleware;
