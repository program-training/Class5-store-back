import ordersInterface from "../interfaces/OrderInterface";
import axios from "axios";

const OMS_BASE_URL =
  process.env.OMS_BASE_URL || "https://project-team1-oms-back.onrender.com";

//מקבל את כל ההזמנות מהרנדר
export const getOrdersFromDB = async () => {
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
export const registerOrderToDB = async (order: ordersInterface) => {
  try {
    const result = await axios.post(`${OMS_BASE_URL}/api/orders`, order);
    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};





//מביא הזמנה לפי id
export const getOrderByUserIdFromDB = async (id: string) => {
  try {
    const orders = await getOrdersFromDB();
    const order = orders.find((order: ordersInterface) => order._id === id);
    if (!order) {
      throw Error("order not found");
    }
    return order;
  } catch (error) {
    return Promise.reject(error);
  }
};
