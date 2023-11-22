import { handleError } from "../../utils/handleErrors";
import { Request, Response } from "express";
import { getAllOrders, getOrderByUserId, registerOrder } from "../service/orderService";
import OrdersInterface from "../interfaces/OrderInterface";
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
    const Order = await getOrderByUserId(id);
    return res.send(Order);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleRegisterOrder = async (req: Request, res: Response) => {
  try {
    const orderData: OrdersInterface = req.body;
    const registeredOrder = await registerOrder(orderData);
    res.status(201).send(registeredOrder);
  } catch (error) {
    handleError(res, error);
  }
};
