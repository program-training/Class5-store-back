import axios from "axios";
import { CheckQuantity } from "../types/types";

const ERP_BASE_URL =
  process.env.ERP_BASE_URL || "https://erp-server-v2.onrender.com";

export const getProductsFromDB = async () => {
  const { data } = await axios.get(
    `${ERP_BASE_URL}/shop_inventory?searchText=`
  );
  return data;
};

export const getProductByIdFromDB = async (productId: string) => {
  const { data } = await axios.get(
    `${ERP_BASE_URL}/shop_inventory/${productId}`
  );
  return data;
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
