// import axios from "axios";
import { products } from "./products";
// const ERP_BASE_URL =
//   process.env.ERP_BASE_URL || "https://erp-server-v2.onrender.com";

export const getProductsFromDB = async () => {
  try {
    // const { data } = await axios.get(
    //   `${ERP_BASE_URL}/api/shop_inventory?searchText=`
    // );
    const data = products;
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getProductByIdFromDB = async (productId: number) => {
  try {
    // const { data } = await axios.get(
    //   `${ERP_BASE_URL}/api/shop_inventory/${productId}`
    // );
    const data = products.find((product) => product.id === productId);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};
