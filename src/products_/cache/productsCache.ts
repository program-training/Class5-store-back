import { ProductInterface } from "../types/types";
import { redisClient } from "../../redis/client/client";
import { getProductsFromDB } from "../dal/productsDal";

export const getCachedProducts = async () => {
  try {
    const cachedProducts = await redisClient.json.get("products");
    if (!cachedProducts) return null;
    return cachedProducts;
  } catch (error) {
    console.log(error);
  }
};

export const getCachedProduct = async (id: number) => {
  try {
    const isExist = await redisClient.exists("products");
    if (isExist !== 1) {
      const products = await getProductsFromDB();
      await redisClient.json.set("products", ".", products);
    }
    const cachedProducts = (await redisClient.json.get("products")) as
      | ProductInterface[]
      | null;
    if (!cachedProducts || Array.isArray(cachedProducts) === false) return null;
    const cachedProduct = cachedProducts.find((product) => product.id === id);
    return cachedProduct;
  } catch (error) {
    console.log(error);
  }
};
