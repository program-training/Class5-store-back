import { handleError } from "../../utils/handleErrors";
import { Request, Response } from "express";
import { getAllOrders, getOrderByUserId } from "../service/orderService";


export const handleGetOrders = async (req: Request, res: Response) => {
  try {
    const Orders = await getAllOrders();
    return res.send(Orders);
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
