import { redisClient } from "../../redis/client/client";
import {
  getOrderByIdFromDB,
  getOrderByUserIdFromDB,
  getOrdersFromDB,
  registerOrderToDB,
} from "../dal/orderDal";
import { normalizedUsersForCache } from "../helpers/normalizeOrderForCache";
import { registerOrderService } from "../service/orderService";
import RegisterOrderFromClient from "../typeDef/interface";

export const getOrders = async () => {
  try {
    const orders = await getOrdersFromDB();
    const normalizedUsers = normalizedUsersForCache(orders);
    await redisClient.json.set("orders", ".", orders);
    if (!orders) throw new Error("no orders in the database");
    return orders;
  } catch (error) {
    console.log(error);
    return null;
  }
};

interface GetOrderInterface {
  id: string;
}

export const getOrderByUserId = async (_: any, { id }: GetOrderInterface) => {
  try {
    const order = await getOrderByUserIdFromDB(id);
    return order[0];
  } catch (error) {
    console.log(error);
    return "null";
  }
};
export const getOrderById = async (_: any, { id }: GetOrderInterface) => {
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
