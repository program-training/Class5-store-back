import chalk from "chalk";
import { handleError, handleJsonfileError } from "../../utils/handleErrors";
import {
  getOrderByUserIdFromJsonFile,
  getOrdersFromJsonFile,
} from "../dal/orderDal";
import ordersInterface from "../interfaces/OrderInterface";

export const getAllOrders = async () => {
  try {
    const AllOrders = await getOrdersFromJsonFile();
    return AllOrders;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getOrderByUserId =async (id:string) => {
  try {
    return await getOrderByUserIdFromJsonFile(id)
  } catch (error) {
    return Promise.reject(error);
  }
}
