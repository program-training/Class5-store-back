import sendEmail from "../../utils/sendEmail";
import {
  getOrderByIdFromDB,
  getOrderByUserIdFromDB,
  getOrdersFromDB,
  registerOrderToDB,
} from "../dal/orderDal";
import { convertToOrder } from "../helpers/convertToOrder";
import OrderFromClientInterface from "../interfaces/OrderFromClientInterface";
import OrderInterface from "../interfaces/OrderInterface";

export const getOrdersService = async () => {
  try {
    const orders = await getOrdersFromDB();
    return orders;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getOrderByUserIdService = async (id: string) => {
  try {
    return await getOrderByUserIdFromDB(id);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const registerOrderService = async (
  orderFromClient: OrderFromClientInterface
) => {
  try {
    const order: OrderInterface = convertToOrder(orderFromClient);
    const registeredOrder = await registerOrderToDB(order);
    console.log(registeredOrder);
    const {
      email,
      shippingDetails: { userId },
    } = orderFromClient;
    await sendEmail(email, userId);
    return registeredOrder;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getOrderByIdService = async (id: string) => {
  try {
    const order = await getOrderByIdFromDB(id);
    return order;
  } catch (error) {
    return Promise.reject(error)
  }
};

