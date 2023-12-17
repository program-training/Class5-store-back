import { redisClient } from "../../redis/client/client";
import { getCachedOrders } from "../cache/ordersCache";
import {
  getOrderByIdFromDB,
  getOrderByUserIdFromDB,
  getOrdersFromDB,
} from "../dal/orderDal";
import { registerOrderService } from "../service/orderService";
import RegisterOrderFromClient from "../typeDef/interface";

export const getOrders = async () => {
  try {
    const cachedOrders = await getCachedOrders();
    if (cachedOrders) {
      console.log("orders from cache!!!");
      return cachedOrders;
    }
    const orders = await getOrdersFromDB();
    // const normalizedOrders = normalizedOrdersForCache(orders);
    await redisClient.json.set("orders", ".", orders);
    if (!orders) throw new Error("no orders in the database");
    console.log("orders from dataBase");

    return orders;
  } catch (error) {
    console.log(error);
    return null;
  }
};

interface GetOrderInterface {
  id: string;
}

export const getOrderByUserId = async (
  _: ParentNode,
  { id }: GetOrderInterface
) => {
  try {
    const order = await getOrderByUserIdFromDB(id);
    return order[0];
  } catch (error) {
    console.log(error);
    return "null";
  }
};
export const getOrderById = async (
  _: ParentNode,
  { id }: GetOrderInterface
) => {
  try {
    const order = await getOrderByIdFromDB(id);
    return order;
  } catch (error) {
    console.log(error);
    return "null";
  }
};
interface RegisterOrder {
  order: RegisterOrderFromClient;
}
export const registerOrder = async (_: any, registerOrder: RegisterOrder) => {
  try {
    const order = await registerOrderService(registerOrder.order);
    return order;
  } catch (error) {
    console.log(error);
    return "null";
  }
};
