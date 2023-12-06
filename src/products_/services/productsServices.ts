import {
  getProductsFromDB,
  getProductByIdFromDB,
  checkStockInDB,
  cancelProductsInOrderInDB,
} from "../dal/productsDal";
import { convertToCheck, productToCheck } from "../helpers/convetToChack";
import { CheckQuantity } from "../types/types";

export const getProducts = async () => {
  try {
    const products = await getProductsFromDB();
    return products;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};

export const getProduct = async (_: unknown, { id }: { id: String }) => {
  try {
    const product = await getProductByIdFromDB(id as string);
    return product;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};

export const checkProductsInStock = async (
  _: any,
  { cart }: { cart: productToCheck[] }
) => {
  try {
    const converted = convertToCheck(cart);
    const result = await checkStockInDB(converted);
    return result;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};
export const cancelProductsInStock = async (
  _: any,
  { cart }: { cart: CheckQuantity[] }
) => {
  try {
    const product = await cancelProductsInOrderInDB(cart);
    return product;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};
