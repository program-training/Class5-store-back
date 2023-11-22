import {
  getProductByIdFromJsonFile,
  getProductsFromJsonFile,
} from "../dal/productsDal";

export const getProducts = async () => {
  try {
    const products = await getProductsFromJsonFile();
    return products;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getProduct = async (productId: number) => {
  try {
    const getProductFromMDB = await getProductByIdFromJsonFile(productId);
    console.log(getProductFromMDB);
    return getProductFromMDB;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const checkQuantity = async (
  productId: number,
  objectsArray: any,
  quantity: number
) => {
  try {
  } catch (error) {}
};
