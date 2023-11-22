// import UserInterface from "../interfaces/ProductsInterface";
import {
  getProducts,
  getProductById,
  getProductsInStock
} from "../services/productsApiService";
import { handleError } from "../../utils/handleErrors";
// import userValidation from "../models/joi/userValidation";
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
    const product = await getProductById(id);
    return res.send(product);
  } catch (error) {
    handleError(res, error);
  }
};

type OrderFromClient = {
  productId: string;
  requiredQuantity: number
}

export const handleGetProductsInStock = async (req: Request, res: Response) =>  {
  try {
    const order = req.body.products as OrderFromClient[]
    const productsExist = await getProductsInStock(order)
    return productsExist
  } catch (error) {
    handleError(res, error);
  }
}
// export const handleDecreaseProduct = async (req: Request, res: Response) => {
//   try {
//     const { id, quantityToSubtract } = req.params;
//     const DecreaseProduct = await decreaseProduct(id, +quantityToSubtract);
//     return res.send(DecreaseProduct);
//   } catch (error) {
//     handleError(res, error);
//   }
// };
