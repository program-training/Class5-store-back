import axios from "axios";
const DB_URL = "https://erp-server-v2.onrender.com";

export const getProductsFromServer = async () => {
  try {
    const { data } = await axios.get(
      `${DB_URL}/api/shop_inventory?searchText=`
    );
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getProductByIdFromServer = async (productId: number) => {
  try {
    const { data } = await axios.get(
      `${DB_URL}/api/shop_inventory/${productId}`
    );
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};
