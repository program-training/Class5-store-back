import { getProductByIdFromDB } from "../dal/productDal";

export const getProduct = async (_: unknown, { id }: { id: String }) => {
  try {
    const product = await getProductByIdFromDB(id as string);
    return product;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};
