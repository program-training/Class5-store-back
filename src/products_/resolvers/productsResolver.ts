import {
  getProductsFromDB,
  getProductByIdFromDB,
  checkStockInDB,
} from "../dal/productsDal";
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
  { cart }: { cart: CheckQuantity[] }
) => {
  try {
    const product = await checkStockInDB(cart);
    return product;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};
