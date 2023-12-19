import { handleError } from "../../utils/handleErrors";
import { Request, Response } from "express";
import {
  getOrdersService,
  getOrderByUserIdService,
  registerOrderService,
  getOrderByIdService,
} from "../service/orderService";
import OrderFromClientInterface from "../interfaces/OrderFromClientInterface";
import orderValidation from "../models/joi/orderValidation";

export const getOrdersController = async (req: Request, res: Response) => {
  try {
    const orders = await getOrdersService();
    return res.status(200).send(orders);
  } catch (error) {
    if (error instanceof Error) handleError(res, error);
  }
};

export const getOrderByUserIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const orders = await getOrderByUserIdService(id);
    return res.send(orders);
  } catch (error) {
    if (error instanceof Error) handleError(res, error);
  }
};

export const registerOrderController = async (req: Request, res: Response) => {
  try {
    const order: OrderFromClientInterface = req.body;
    const { error } = orderValidation(order);
    if (error?.details[0].message) throw new Error(error?.details[0].message);
    const registeredOrder = await registerOrderService(order);
    res.send(registeredOrder);
  } catch (error) {
    if (error instanceof Error) handleError(res, error);
  }
};

export const getOrderByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const order = await getOrderByIdService(id);
    res.send(order);
  } catch (error) {
    if (error instanceof Error) handleError(res, error);
  }
};
