import { redisClient } from "../../redis/client/client";
import { PubSub } from "graphql-subscriptions";
import { getCachedProduct, getCachedProducts } from "../cache/productsCache";
import {
  getProductsFromDB,
  getProductByIdFromDB,
  checkStockInDB,
  cancelProductsInOrderInDB,
} from "../dal/productsDal";

import { CheckQuantity, productToCheck } from "../types/types";
const pubsub = new PubSub();

export const getProducts = async () => {
  const cachedProducts = await getCachedProducts();
  if (cachedProducts != null) {
    return cachedProducts;
  } else {
    try {
      const products = await getProductsFromDB();
      await redisClient.json.set("products", ".", products);
      return products;
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      return null;
    }
  }
};

export const getProduct = async (_: unknown, { id }: { id: string }) => {
  const cachedProduct = await getCachedProduct(Number(id));
  if (cachedProduct != null) {
    return cachedProduct;
  } else {
    try {
      const product = await getProductByIdFromDB(id as string);
      return product;
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
      return null;
    }
  }
};

export const checkProductsInStock = async (
  _: ParentNode,
  { cart }: { cart: productToCheck[] }
) => {
  try {
    const result = await checkStockInDB(cart);
    return result;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};

export const cancelProductsInStock = async (
  _: ParentNode,
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
export const productCreated = {
  subscribe: () => {
    return pubsub.asyncIterator(["PRODUCT_CREATED"]);
  },
};
