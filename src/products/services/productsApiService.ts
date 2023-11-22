import {
  getProductByIdFromJsonFile,
  getProductsFromJsonFile,
} from "../dal/productsDal";
import { CheckQuantity, NotInStock } from "./types";

export const getProducts = async () => {
  try {
    const products = await getProductsFromJsonFile();
    return products;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getProduct = async (productId: number) => {
  try {
    const getProductFromMDB = await getProductByIdFromJsonFile(productId);
    // console.log(getProductFromMDB);
    return getProductFromMDB;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getDataForQuantity = async (cart: CheckQuantity[]) => {
  try {
    const inStock: CheckQuantity[] = [];
    const notInStock: NotInStock[] = [];
    await Promise.all(
      cart.map(async (item) => {
        const product = await getProductByIdFromJsonFile(item.productId);
        if (product.quantity === 0) {
          notInStock.push({ product, amountMissing: item.amount });
        } else if (product.quantity !== 0) {
          const referents = item.amount - product.quantity;
          if (referents < 0) {
            inStock.push(item);
          } else if (referents > 0) {
            inStock.push({
              productId: item.productId,
              amount: product.quantity,
            });
            notInStock.push({ product, amountMissing: referents });
          }
        }
      })
    );

    return { inStock, notInStock };
  } catch (error) {
    return Promise.reject(error);
  }
};
