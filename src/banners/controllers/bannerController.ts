import { handleError } from "../../utils/handleErrors";
import { getBannerService } from "../services/bannerService";
import { Request, Response } from "express";

export const handleGetBanner = async (req: Request, res: Response) => {
  try {
    const message = await getBannerService();
    return res.status(200).send(message);
  } catch (error) {
    handleError(res, error);
  }
};
