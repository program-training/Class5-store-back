import { handleError } from "../../utils/handleErrors";
import { Request, Response } from "express";
import { getAllOrders } from "../service/orderService";
import { getProductById } from "../../dataAccess/mongoose";

export const handleGetOrders = async (req: Request, res: Response) => {
  try {
    const Orders = await getAllOrders();
    return res.send(Orders);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleGetOrder = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const Orders = await getProductById(id);
    return res.send(Orders);
  } catch (error) {
    handleError(res, error);
  }
};
