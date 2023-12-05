import { getProductsFromDB } from "../dal/productsDal";

export const getProducts = async () => {
  try {
    const products = await getProductsFromDB();
    return products;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};
