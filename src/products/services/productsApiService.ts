import { required } from "joi";
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
       const product = await getProductByIdFromDB(item.productId)
        if (!product) throw new ServerError(404, "not found")
        if (product.quantity === 0) {
          notInStock.push({
            product: {...product},
            requiredQuantity: item.requiredQuantity,
          });
        }
        if (product.quantity !== 0) {
          const referents = product.quantity - item.requiredQuantity;
          if (referents >= 0) {
            inStock.push(item);
            product.quantity -= item.requiredQuantity;
          } else if (referents < 0) {
            notInStock.push({
              product: {...product},
              requiredQuantity: item.requiredQuantity,
            });
            product.quantity = 0
          }
        }
      })
    );
    return { inStock, notInStock };
  } catch (error) {
    return Promise.reject(error);
  }
};

export const cancelOrderService =async (cart: InStock[]) => {
  try {
    await Promise.all(
      cart.map(async (item) => {
        const product = await getProductByIdFromDB(item.productId);
        if (!product) throw new ServerError(404, "not found")
        product.quantity += item.requiredQuantity
      }))

   
    return cart
  } catch (error) {
    return Promise.reject(error);
  }
}