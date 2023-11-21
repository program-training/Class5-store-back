import { handleError } from "../../utils/handleErrors";
import { getOrdersFromDb, addOrdersToDb } from "../dal/orderDal";
import { Request, Response } from "express";

export const handleGetOrders = async (req: Request, res: Response) => {
  try {
    const Orders = await getOrdersFromDb();
    return res.send(Orders);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleGetOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const Orders = await getOrdersFromDb();
    return res.send(Orders);
  } catch (error) {
    handleError(res, error);
  }
};
