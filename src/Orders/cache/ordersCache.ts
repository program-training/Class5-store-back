import { NextFunction, Response, Request } from "express";
import RedisClient from "../../cache/redis";
// import UserInterface from "../interfaces/UserInterface";

export const getCachedOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cachedOrders = await redisClient.json.get("orders");
    if (!cachedOrders) return next();
    console.log("orders from cache!!!");
    return res.send(cachedOrders);
  } catch (error) {
    next();
  }
};

// export const getCachedUser = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const { id: userId } = req.params;
//     const cachedUsers = (await RedisClient.json.get(
//       "users"
//     )) as UserInterface | null;

//     if (!cachedUsers || Array.isArray(cachedUsers) === false) return next();
//     const cachedUser = cachedUsers.find((user) => user._id === userId);

//     console.log("user from cache!!!");
//     return res.send(cachedUser);
//   } catch (error) {
//     next();
//   }
// };
