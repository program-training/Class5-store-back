import {
  getProducts,
  getProduct,
  updateProductQuantity,
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

export const handleSubtractQuantity = async (req: Request, res: Response) => {
  try {
    const productId = parseInt(req.params.productId);
    const { quantity } = req.body;

    const product = await updateProductQuantity(productId, quantity);

    if (!product) {
      return res.status(404).send({ error: "Product not found" });
    }

    return res.status(200).send({
      message: "Quantity subtracted successfully",
      updatedQuantity: product,
    });
  } catch (error) {
    handleError(res, error);
  }
};
