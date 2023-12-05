import axios from "axios";

const ERP_BASE_URL =
  process.env.ERP_BASE_URL || "https://erp-server-v2.onrender.com";

export const getProductByIdFromDB = async (productId: string) => {
  const { data } = await axios.get(
    `${ERP_BASE_URL}/shop_inventory/${productId}`
  );
  console.log(data);

  return data;
};
