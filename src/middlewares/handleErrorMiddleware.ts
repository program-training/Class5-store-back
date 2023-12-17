import { Request, Response } from "express";
import ServerError from "../utils/ServerError";
import { ErrorType } from "../types/types";

const handleErrorMiddleware = (
  error: ErrorType,
  req: Request,
  res: Response
) => {
  const status = error instanceof ServerError ? error.status : 500;
  const message =
    error instanceof ServerError || error instanceof Error
      ? error.message
      : "Internal Server Error";

  res.status(status).send(message);
};

export default handleErrorMiddleware;
