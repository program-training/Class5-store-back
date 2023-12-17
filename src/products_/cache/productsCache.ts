import { NextFunction, Response, Request } from "express";
import { ProductInterface } from "../types/types";
import { redisClient } from "../../redis/client/client";
// import RedisClient from "../../cache/redis";

export const getCachedProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cachedProducts = await redisClient.json.get("products");
    if (!cachedProducts) return next();
    console.log("users from cache!!!");
    return res.send(cachedProducts);
  } catch (error) {
    next();
  }
};

export const getCachedProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id: ProductId } = req.params;
    const cachedProducts = (await redisClient.json.get(
      "products"
    )) as ProductInterface | null;

    if (!cachedProducts || Array.isArray(cachedProducts) === false)
      return next();
    const cachedProduct = cachedProducts.find(
      (product) => product._id === ProductId
    );

    console.log("product from cache!!!");
    return res.send(cachedProduct);
  } catch (error) {
    next();
  }
};
