import axios from "axios";
import { CheckQuantity } from "../types/types";

const ERP_BASE_URL =
  process.env.ERP_BASE_URL || "https://erp-server-v2.onrender.com";

export const getProductsFromDB = async () => {
  try {
    const { data } = await axios.get(
      `${ERP_BASE_URL}/shop_inventory?searchText=`
    );
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getProductByIdFromDB = async (productId: number) => {
  try {
    const { data } = await axios.get(
      `${ERP_BASE_URL}/shop_inventory/${productId}`
    );
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

// לעבוד על זה
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

// לעבוד על זה
export const cancelProductsInOrder = async (cart: CheckQuantity[]) => {
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
    const { data } = await axios.get(`${ERP_BASE_URL}/connect`);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
