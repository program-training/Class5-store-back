import {
  getProductByIdFromDB,
  getProductsFromDB,
  cancelOrder,
  checkStockInDB,
} from "../dal/productsDal";
import { CheckQuantity, NotInStock } from "../types/types";

export const getProductsService = async () => {
  try {
    const products = await getProductsFromDB();
    return products;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getProductByIdService = async (productId: number) => {
  try {
    const getProductFromMDB = await getProductByIdFromDB(productId);
    return getProductFromMDB;
  } catch (error) {
    return Promise.reject(error);
  }
};
type Response = {
  inStock: CheckQuantity[];
  notInStock: NotInStock[];
};
export const getProductsStockService = async (cart: CheckQuantity[]) => {
  try {
    const productsData = await checkStockInDB(cart);
    return productsData as Response;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const cancelOrderService = async (cart: CheckQuantity[]) => {
  try {
    const canceledProducts = await cancelOrder(cart);
    return canceledProducts as CheckQuantity[];
  } catch (error) {
    return Promise.reject(error);
  }
};
