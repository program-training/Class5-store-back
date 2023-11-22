import jsonfile from "jsonfile";
import path from "path";
import { handleJsonfileError } from "../../utils/handleErrors";
import ordersInterface from "../interfaces/OrderInterface";

const DB_URL = path.join(__dirname, "../../../DB/orders.json");

export const getOrdersFromJsonFile = async () => {
  try {
    const data = await jsonfile.readFile(DB_URL);
    return data;
  } catch (error) {
    return handleJsonfileError(error);
  }
};

export const getOrderByUserIdFromJsonFile = async (id: string) => {
  try {
    const result = await getOrdersFromJsonFile();
    const orders = result.orders as ordersInterface[];
    const order = orders.find((p: ordersInterface) => p.userId === id);
    if (!order) {
      throw Error("order not found");
    }
    return order;
  } catch (error) {
    console.log(error);
    return handleJsonfileError(error);
  }
};

export const registerOrderToDb = async (order: ordersInterface) => {
  try {
    const data = await getOrdersFromJsonFile();
    const newData = { ...data.orders, order };
    await jsonfile.writeFile(DB_URL, newData);
    return newData;
  } catch (error) {
    return handleJsonfileError(error);
  }
};
