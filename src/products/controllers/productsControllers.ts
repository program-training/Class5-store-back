import {
  getProducts,
  getProduct,
  getDataForQuantity,
} from "../services/productsApiService";
import { handleError } from "../../utils/handleErrors";
import { Request, Response } from "express";

export const handleGetProducts = async (req: Request, res: Response) => {
  try {
    const products = await getProducts();
    return res.send(products);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleGetProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await getProduct(+id);
    return res.send(product);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleGetFromStock = async (req: Request, res: Response) => {
  try {
    const cart = req.body;
    const result = await getDataForQuantity(cart.cart);
    return res.send(result);
  } catch (error) {
    handleError(res, error);
  }
};
