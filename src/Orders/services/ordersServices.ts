import { redisClient } from "../../redis/client/client";
import {
  getCachedOrderById,
  getCachedOrderByUserId,
  getCachedOrders,
  postCachedRegisterOrder,
} from "../cache/ordersCache";
import {
  getOrderByIdFromDB,
  getOrderByUserIdFromDB,
  getOrdersFromDB,
} from "../dal/orderDal";
import { registerOrderService } from "../service/orderService";
import RegisterOrderFromClient from "../typeDef/interface";

interface GetOrderInterface {
  id: string;
}

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

export const getOrderByUserId = async (
  _: ParentNode,
  { id }: GetOrderInterface
) => {
  try {
    const cachedOrderByUserId = await getCachedOrderByUserId(id);
    if (cachedOrderByUserId) {
      console.log("orderByUserId from cache!!!");
      return cachedOrderByUserId;
    }
    const order = await getOrderByUserIdFromDB(id);
    if (!order) throw new Error("no order in the database");
    console.log("order from dataBase");
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
    const cachedOrderById = await getCachedOrderById(id);
    if (cachedOrderById) {
      console.log("orderById from cache!!!");
      return cachedOrderById;
    }
    const order = await getOrderByIdFromDB(id);
    if (!order) throw new Error("no orders in the database");
    console.log("order from dataBase");
    return order;
  } catch (error) {
    console.log(error);
    return "null";
  }
};
interface RegisterOrder {
  order: RegisterOrderFromClient;
}
export const registerOrder = async (
  _: ParentNode,
  registerOrder: RegisterOrder
) => {
  try {
    // const cachedRegisterOrder = await postCachedRegisterOrder(
    //   registerOrder.order
    // );
    // if (cachedRegisterOrder) {
    //   console.log("cachedRegisterOrder insert from cache!!!");
    //   return cachedRegisterOrder;
    // }
    const order = await registerOrderService(registerOrder.order);
    return order;
  } catch (error) {
    console.log(error);
    return "null";
  }
};
