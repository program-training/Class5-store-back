import { checkStockInDB } from "../dal/productsInStockDal";

export const checkProductsInStock = async (
  _: any,
  { cart }: { cart: String }
) => {
  try {
    const product = await checkStockInDB(cart);
    return product;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};
