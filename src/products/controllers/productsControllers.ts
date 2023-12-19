import {
  getProductsService,
  getProductByIdService,
  getProductsStockService,
  cancelOrderService,
} from "../services/productsApiService";
import { handleError } from "../../utils/handleErrors";
import { Request, Response } from "express";
import { convertToCheck } from "../helpers/convertToCheck";

export const getProductsController = async (req: Request, res: Response) => {
  try {
    const products = await getProductsService();
    return res.send(products);
  } catch (error) {
    if (error instanceof Error) handleError(res, error);
  }
};

export const getProductByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await getProductByIdService(+id);
    return res.send(product);
  } catch (error) {
    if (error instanceof Error) handleError(res, error);
  }
};

export const getProductsStockController = async (
  req: Request,
  res: Response
) => {
  try {
    const cart = req.body;
    const converted = convertToCheck(cart);
    const result = await getProductsStockService(converted);
    return res.send(result);
  } catch (error) {
    if (error instanceof Error) handleError(res, error);
  }
};

export const cancelOrderController = async (req: Request, res: Response) => {
  try {
    const cart = req.body;
    const result = await cancelOrderService(cart);
    return res.send(result);
  } catch (error) {
    if (error instanceof Error) handleError(res, error);
  }
};
