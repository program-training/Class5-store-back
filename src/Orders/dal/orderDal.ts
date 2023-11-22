import jsonfile from "jsonfile";
import path from "path";
import { handleJsonfileError } from "../../utils/handleErrors";
import OrdersInterface from "../interfaces/OrderInterface";

const DB_URL = path.join(__dirname, "../../../DB/orders.json");

export const getOrdersFromJsonFile = async () => {
  try {
    const data = await jsonfile.readFile(DB_URL);
    return data.orders;
  } catch (error) {
    return handleJsonfileError(error);
  }
};

export const getOrderByIdFromJsonFile = async (id: string) => {
  try {
    const result = await getOrdersFromJsonFile();
    const orders = result.orders as OrdersInterface[]
    const order = orders.find((p: OrdersInterface) => p.userId === id);
    if (!order) {
      throw Error("Product not found");
    }
    return order;
  } catch (error) {
    return handleJsonfileError(error);
  }
};

export const addOrdersToDb = async (order: OrdersInterface) => {
  try {
    const data = await getOrdersFromJsonFile();
    const newData = { ...data.orders, order };
    await jsonfile.writeFile(DB_URL, newData);
    return newData;
  } catch (error) {
    return handleJsonfileError(error);
  }
};
