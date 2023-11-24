import sendEmail from "../../utils/sendEmail";
import {
  getOrderByUserIdFromDB,
  getOrdersFromDB,
  registerOrderToDB,
} from "../dal/orderDal";
import OrderFromClientInterface from "../interfaces/OrderFromClientInterface";
import ordersInterface from "../interfaces/OrderInterface";

export const getOrdersService = async () => {
  try {
    const AllOrders = await getOrdersFromDB();
    return AllOrders;
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
    const orderTime = new Date();
    const status = "pending";
    const order: ordersInterface = {
      ...orderFromClient,
      orderTime,
      status,
    };
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
