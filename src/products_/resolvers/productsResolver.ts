import { getProductsFromDB, getProductByIdFromDB } from "../dal/productsDal";

export const getProducts = async () => {
  try {
    const products = await getProductsFromDB();
    return products;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};

export const getProduct = async (_: unknown, { id }: { id: String }) => {
  try {
    const product = await getProductByIdFromDB(id as string);
    return product;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};
