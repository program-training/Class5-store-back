import ServerError from "../../utils/ServerError";
import ordersInterface from "../interfaces/OrderInterface";
import axios from "axios";

const OMS_BASE_URL =
  process.env.OMS_BASE_URL || "https://project-team1-oms-back.onrender.com";

export const getOrdersFromDB = async () => {
  try {
    const { data: orders } = await axios.get(`${OMS_BASE_URL}/api/orders`);
    if (orders.length === 0) throw new ServerError(404, "products not found");
    return orders;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const registerOrderToDB = async (order: ordersInterface) => {
  try {
    const { data } = await axios.post(`${OMS_BASE_URL}/api/orders`, order);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getOrderByUserIdFromDB = async (id: string) => {
  try {
    const { data: orders } = await axios.get(
      `${OMS_BASE_URL}/api/orders/allOrders/${id}`
    );
    if (!orders) throw new ServerError(404, "orders not found");
    return orders;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getOrderByIdFromDB = async (id: string) => {
  try {
    const { data: order } = await axios.get(`${OMS_BASE_URL}/api/orders/${id}`);
    return order;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const connectedToOMS = async () => {
  try {
    const { data } = await axios.get(`${OMS_BASE_URL}/api/connected`);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
