import jsonfile from "jsonfile";
import path from "path";
import { handleJsonfileError } from "../../utils/handleErrors";
import ordersInterface from "../interfaces/OrderInterface";

const DB_URL = path.join(__dirname, "../../DB/orders.json");

export const getOrdersFromJsonFile = async () => {
  try {
    const data = await jsonfile.readFile(DB_URL);
    return data;
  } catch (error) {
    return handleJsonfileError(error);
  }
};

export const getOrderByIdFromJsonFile = async (id: number) => {
  try {
    const result = await getOrdersFromJsonFile();
    const orders = result.orders;
    const order = orders.find((p: ordersInterface) => p.id === id);
    if (!order) {
      console.log("Product not found");
      throw Error;
    }
    return order;
  } catch (error) {
    console.log(error);
    return handleJsonfileError(error);
  }
};

export const addOrdersToDb = async (documents: Record<string, unknown>[]) => {
  try {
    const data = await getOrdersFromJsonFile();
    const newData = { ...data.orders, documents };
    await jsonfile.writeFile(DB_URL, newData);
    return newData;
  } catch (error) {
    return handleJsonfileError(error);
  }
};
