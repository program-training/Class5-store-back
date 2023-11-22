import jsonfile from "jsonfile";
import path from "path";
import { handleJsonfileError } from "../../utils/handleErrors";
import ProductInterface from "../interfaces/ProductInterface";

const DB_URL = path.join(__dirname, "../../../DB/products.json");
console.log(DB_URL);

export const getProductByIdFromJsonFile = async (id: string) => {
    try {
      const result = await getProductsFromJsonFile();
      const products = result.products;
      const product = products.find((p: ProductInterface) => p.id === id);
      if (!product) {
        console.log("Product not found");
        throw Error;
      }
      return product;
    } catch (error) {
      console.log(error);
      return handleJsonfileError(error);
    }
  };

  //פונקציה שמקבלת מוצרים מתוך הjson file ומעבירה הלאה
export const getProductsFromJsonFile = async () => {
    try {
      const data = await jsonfile.readFile(DB_URL);
      return data;
    } catch (error) {
      return handleJsonfileError(error);
    }
  };
  