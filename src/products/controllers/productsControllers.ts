import {
  getProductsService,
  getProductByIdService,
  getProductsStockService,
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
    const result = await getProductsStockService(cart.cart);
    return res.send(result);
  } catch (error) {
    handleError(res, error);
  }
};
