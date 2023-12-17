import ServerError from "./ServerError";
import { Response } from "express";

export const handleError = (
  res: Response,
  error: ServerError | Error | string,
  status: number = 400
) => {
  status = error instanceof ServerError ? error.status : status;
  const message =
    error instanceof ServerError || error instanceof Error
      ? error.message
      : "Oops... an error accorded";
  return res.status(status).send(message);
};
