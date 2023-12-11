import {
  getOrderByIdFromDB,
  getOrderByUserIdFromDB,
  getOrdersFromDB,
  registerOrderToDB,
} from "../dal/orderDal";
import OrderFromClientInterface from "../interfaces/OrderFromClientInterface";
import OrdersInterface from "../interfaces/OrderInterface";

export const getOrders = async () => {
  try {
    const orders = await getOrdersFromDB();
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
    console.log(order);
    return order[0];
  } catch (error) {
    console.log(error);
    return "null";
  }
};
export const getOrderById = async (_: any, { id }: GetOrderInterface) => {
  try {
    const order = await getOrderByIdFromDB(id);
    console.log(order);
    return order;
  } catch (error) {
    console.log(error);
    return "null";
  }
};
export const registerOrder = async (_: any, order: OrdersInterface) => {
  try {
    const data = await registerOrderToDB(order);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return "null";
  }
};
