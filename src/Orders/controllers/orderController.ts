import { handleError } from "../../utils/handleErrors";
import { Request, Response } from "express";
import { getOrdersFromDb, getOrderByUserId, registerOrderService } from "../service/orderService";
import OrderFromClientInterface from "../interfaces/OrderFromClientInterface";


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

export const handleRegisterOrder = async (req: Request, res: Response) => {
  try {
    const order =  req.body as OrderFromClientInterface
    const registeredOrder = registerOrderService(order)
    res.send(registeredOrder)
  } catch (error) {
    handleError(res, error);
  }
}