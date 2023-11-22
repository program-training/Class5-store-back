import sendEmail from "../../utils/sendEmail";
import {
  getOrderByUserIdFromJsonFile,
  getOrdersFromJsonFile,
  registerOrderToDb,
} from "../dal/orderDal";
import OrderFromClientInterface from "../interfaces/OrderFromClientInterface";
import ordersInterface from "../interfaces/OrderInterface";

export const getOrdersFromDb = async () => {
  try {
    const AllOrders = await getOrdersFromJsonFile();
    return AllOrders;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getOrderByUserId = async (id: string) => {
  try {
    return await getOrderByUserIdFromJsonFile(id);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const registerOrderService = async (
  orderFromClient: OrderFromClientInterface
) => {
  try {
    const orderTime = new Date();
    const status = "pending";
    const id = Math.random();
    const order: ordersInterface = {
      ...orderFromClient,
      orderTime,
      status,
      id,
    };
    await registerOrderToDb(order);
    const { email, userId } = orderFromClient;
    await sendEmail(email, userId);
    return order;
  } catch (error) {
    return Promise.reject(error);
  }
};
