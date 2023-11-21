import chalk from "chalk";
import { handleError, handleJsonfileError } from "../../utils/handleErrors";
import { getOrdersFromDb } from "../dal/orderDal";
import { getProductsFromJsonFile } from "../../dataAccess/jsonfileDAL";
import ordersInterface from "../interfaces/OrderInterface";

export const getAllOrders = async () => {
  try {
    const AllOrders = await getOrdersFromDb();
    return AllOrders;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};

export const getProductById = async (id: number) => {
  try {
    const orders = await getOrdersFromDb();
    const order = orders.find((p: ordersInterface) => p.id === id);
    if (!order) {
      console.log("order not exist");
      throw Error;
    }
    return order;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};
