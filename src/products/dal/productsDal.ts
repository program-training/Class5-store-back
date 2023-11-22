import jsonfile from "jsonfile";
import path from "path";
import { handleJsonfileError } from "../../utils/handleErrors";
import ProductInterface from "../interfaces/productInterface";

const DB_URL = path.join(__dirname, "../../../DB/products.json");

export const getProductsFromJsonFile = async () => {
  try {
    const data = await jsonfile.readFile(DB_URL);
    return data;
  } catch (error) {
    return handleJsonfileError(error);
  }
};

export const getProductByIdFromJsonFile = async (id: string) => {
  try {
    const result = await getProductsFromJsonFile();
    const products = result.products;
    const product = products.find((p: ProductInterface) => p.id === id);
    if (!product) {
      throw Error("Product not found");
    }
    return product;
  } catch (error) {
    return handleJsonfileError(error);
  }
};
