import sendEmail from "../../utils/sendEmail";
import {
  getOrderByUserIdFromJsonFile,
  getOrdersFromJsonFile,
  getOrdersFromRender,
  registerOrderToDb,
} from "../dal/orderDal";
import OrderFromClientInterface from "../interfaces/OrderFromClientInterface";
import ordersInterface from "../interfaces/OrderInterface";

export const getOrdersFromDb = async () => {
  try {
    const AllOrders = await getOrdersFromRender();
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
    const order: ordersInterface = {
      ...orderFromClient,
      orderTime,
      status,
    };
    const registerdOrder = await registerOrderToDb(order);
    console.log(registerdOrder);
    const { email, userId } = orderFromClient;
    await sendEmail(email, userId);
    return registerdOrder;
  } catch (error) {
    return Promise.reject(error);
  }
};
