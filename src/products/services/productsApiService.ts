import ServerError from "../../utils/ServerError";
import { getProductByIdFromDB, getProductsFromDB } from "../dal/productsDal";
import { CheckQuantity as InStock, NotInStock } from "../types/types";

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

export const getProductsStockService = async (cart: InStock[]) => {
  try {
    const inStock: InStock[] = [];
    const notInStock: NotInStock[] = [];
    await Promise.all(
      cart.map(async (item) => {
        const product = await getProductByIdFromDB(item.productId);
        if (!product) {
          throw new ServerError(200, "error no such product");
        }
        if (product.quantity === 0) {
          notInStock.push({
            product,
            requiredQuantity: item.requiredQuantity,
          });
        }
        if (product.quantity !== 0) {
          const referents = item.requiredQuantity - product.quantity;
          if (referents <= 0) {
            inStock.push(item);
          } else if (referents > 0) {
            inStock.push({
              productId: item.productId,
              requiredQuantity: item.requiredQuantity,
            });
            notInStock.push({
              product,
              requiredQuantity: item.requiredQuantity,
            });
          }
        }
      })
    );

    return { inStock, notInStock };
  } catch (error) {
    return Promise.reject(error);
  }
};
