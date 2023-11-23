import jsonfile from "jsonfile";
import path from "path";
import { handleJsonfileError } from "../../utils/handleErrors";
import ordersInterface from "../interfaces/OrderInterface";
import axios from "axios";

const DB_URL = path.join(__dirname, "../../../DB/orders.json");
const OMS_BASE_URL =
  process.env.OMS_BASE_URL || "https://project-team1-oms-back.onrender.com";

//מקבל את כל היוזרים מהרנדר
export const getOrdersFromRender = async () => {
  try {
    const orders = await axios.get(`${OMS_BASE_URL}/api/orders`);
    if (orders.data.length === 0) {
      throw Error;
    }
    return orders.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
//רושם הזמנה לרנדר
export const registerOrderToDb = async (order: ordersInterface) => {
  try {
    const result = await axios.post(`${OMS_BASE_URL}/api/orders`, order);
    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

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
