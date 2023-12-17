import { NextFunction, Response, Request } from "express";
import { ProductInterface } from "../types/types";
import { redisClient } from "../../redis/client/client";

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
    const cachedProducts = (await redisClient.json.get(
      "products"
    )) as ProductInterface | null;
    if (!cachedProducts || Array.isArray(cachedProducts) === false) return null;
    const cachedProduct = cachedProducts.find((product) => product._id === id);
    return cachedProduct;
  } catch (error) {
    console.log(error);
  }
};
