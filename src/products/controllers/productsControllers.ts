import {
  getProductsService,
  getProductByIdService,
  getProductsStockService,
  cancelOrderService,
} from "../services/productsApiService";
import { handleError } from "../../utils/handleErrors";
import { Request, Response } from "express";

export const getProductsController = async (req: Request, res: Response) => {
  try {
    const products = await getProductsService();
    return res.send(products);
  } catch (error) {
    handleError(res, error);
  }
};

export const getProductByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await getProductByIdService(+id);
    return res.send(product);
  } catch (error) {
    handleError(res, error);
  }
};

export const getProductsStockController = async (
  req: Request,
  res: Response
) => {
  try {
    const cart = req.body;
    const result = await getProductsStockService(cart);
    return res.send(result);
  } catch (error) {
    handleError(res, error);
  }
};

export const cancelOrderController = async (req: Request, res: Response) => {
  try {
    const cart = req.body;
    const result = await cancelOrderService(cart);
    return res.send(result);
  } catch (error) {
    handleError(res, error);
  }
};
