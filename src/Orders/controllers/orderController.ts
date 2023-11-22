import { handleError } from "../../utils/handleErrors";
import { Request, Response } from "express";
import { getOrdersFromDb, getOrderByUserId } from "../service/orderService";


export const handleGetOrders = async (req: Request, res: Response) => {
  try {
    const Orders = await getOrdersFromDb();
    return res.status(200).send(Orders);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleGetOrderByUserId = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const Orders = await getOrderByUserId(id);
    return res.send(Orders);
  } catch (error) {
    handleError(res, error);
  }
};
