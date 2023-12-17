import { redisClient } from "../../redis/client/client";
import OrderInterface from "../interfaces/OrderInterface";

export const getCachedOrders = async () => {
  try {
    const cachedOrders = await redisClient.json.get("orders");
    return cachedOrders && cachedOrders;
  } catch (error) {
    console.log("orders from cache is fail");
  }
};
export const getCachedOrder = async (orderId: string) => {
  try {
    const cachedOrders = (await redisClient.json.get("orders")) as
      | OrderInterface[]
      | null;
    const cachedOrder =
      cachedOrders && cachedOrders.find((order) => order._id === orderId);
    return cachedOrder;
  } catch (error) {
    console.log("order from cache is fail");
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
