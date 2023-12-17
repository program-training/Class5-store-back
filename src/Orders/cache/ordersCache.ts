import { redisClient } from "../../redis/client/client";
import { getOrdersFromDB } from "../dal/orderDal";
import { convertToOrder } from "../helpers/convertToOrder";
import OrderFromClientInterface from "../interfaces/OrderFromClientInterface";
import OrderInterface from "../interfaces/OrderInterface";

export const getCachedOrders = async () => {
  try {
    const cachedOrders = await redisClient.json.get("orders");
    return cachedOrders && cachedOrders;
  } catch (error) {
    console.log("orders from cache is fail");
  }
};
export const getCachedOrderByUserId = async (userId: string) => {
  try {
    const isExist = await redisClient.exists("orders");
    if (isExist !== 1) {
      const orders = await getOrdersFromDB();
      await redisClient.json.set("orders", ".", orders);
    }
    const cachedOrders = (await redisClient.json.get("orders")) as
      | OrderInterface[]
      | null;
    const cachedOrder =
      cachedOrders &&
      cachedOrders.find((order) => order.shippingDetails.userId === userId);

    return cachedOrder;
  } catch (error) {
    console.log("order from cache is fail");
  }
};
export const getCachedOrderById = async (orderId: string) => {
  try {
    const isExist = await redisClient.exists("orders");
    if (isExist !== 1) {
      const orders = await getOrdersFromDB();
      await redisClient.json.set("orders", ".", orders);
    }
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
export const postCachedRegisterOrder = async (
  orderFromClient: OrderFromClientInterface
) => {
  try {
    const order: OrderInterface = convertToOrder(orderFromClient);
    const orderStringify = JSON.stringify(order);
    const orderParse = JSON.parse(orderStringify);
    const registeredOrder = await redisClient.json.set(
      "orders",
      ".",
      orderParse
    );
    return registeredOrder;
  } catch (error) {
    console.log("order insert from cache is fail");
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
