import axios from "axios";
import { CheckQuantity } from "../types/types";
const ERP_BASE_URL =
  process.env.ERP_BASE_URL || "https://erp-server-v2.onrender.com";
import { products } from "./products";

export const getProductsFromDB = async () => {
  try {
    if (process.env.MODE !== "development") {
      const { data } = await axios.get(
        `${ERP_BASE_URL}/shop_inventory?searchText=`
      );
      return data;
    }
    return products;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getProductByIdFromDB = async (productId: number) => {
  try {
    if (process.env.MODE !== "development") {
      const { data } = await axios.get(
        `${ERP_BASE_URL}/shop_inventory/${productId}`
      );
      return data;
    }
    return products.find((product) => product.id === productId);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const checkStockInDB = async (cart: CheckQuantity[]) => {
  try {
    const { data } = await axios.post(
      `${ERP_BASE_URL}/shop_inventory/updateInventory`,
      cart
    );
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const cancelOrder = async (cart: CheckQuantity[]) => {
  try {
    const { data, status } = await axios.post(
      `${ERP_BASE_URL}/shop_inventory/cancelOrder`,
      cart
    );
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const connectedToERP = async () => {
  try {
    const { data } = await axios.get(`${ERP_BASE_URL}/api/connect`);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
