import chalk from "chalk";
import { handleError, handleJsonfileError } from "../../utils/handleErrors";
import {
  getOrderByIdFromJsonFile,
  getOrdersFromJsonFile,
} from "../dal/orderDal";
import {
  getProductByIdFromJsonFile,
  getProductsFromJsonFile,
} from "../../dataAccess/jsonfileDAL";
import ordersInterface from "../interfaces/OrderInterface";

export const getAllOrders = async () => {
  try {
    const AllOrders = await getOrdersFromJsonFile();
    console.log(AllOrders);
    return AllOrders;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};

export const getProduct = async (productId: number) => {
  try {
    const getProductFromMDB = await getProductByIdFromJsonFile(productId);
    console.log(getProductFromMDB);
    return getProductFromMDB;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};
