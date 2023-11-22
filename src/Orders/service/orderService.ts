import {
  addOrdersToDb,
  getOrderByIdFromJsonFile,
  getOrdersFromJsonFile,
} from "../dal/orderDal";
import OrdersInterface from "../interfaces/OrderInterface";
export const getAllOrders = async () => {
  try {
    const AllOrders = await getOrdersFromJsonFile();
    return AllOrders;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getOrderByUserId = async (userId: string) => {
  try {
    const order = await getOrderByIdFromJsonFile(userId);
    return order;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const registerOrder =async (order:OrdersInterface) => {
  try {
    const registeredOrder = await addOrdersToDb(order)
    return registeredOrder
  } catch (error) {
    return Promise.reject(error);
  }
}
