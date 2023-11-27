import ordersInterface from "../interfaces/OrderInterface";
import axios from "axios";

const OMS_BASE_URL =
  process.env.OMS_BASE_URL || "https://project-team1-oms-back.onrender.com";

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

export const registerOrderToDB = async (order: ordersInterface) => {
  try {
    console.log(order, 1);

    const result = await axios.post(`${OMS_BASE_URL}/api/orders`, order);
    console.log(result.data);

    return result.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

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

export const getOrderByIdFromDB = async (id: string) => {
  try {
    const { data } = await axios.get(`${OMS_BASE_URL}/api/orders/${id}`);
    return data;
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
