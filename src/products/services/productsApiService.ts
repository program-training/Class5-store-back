import UserInterface from "../interfaces/ProductsInterface";
import { v1 as uuid1 } from "uuid";
import { comparePassword, generateUserPassword } from "../helpers/bcrypt";
import {
  getProductByIdFromJsonFile,
  getProductsFromJsonFile,
} from "../../dataAccess/jsonfileDAL";
import chalk from "chalk";
import userValidation from "../models/joi/userValidation";
import { getDataFromDummy } from "../../dataAccess/dummyjson";
import { addDataToJsonPlaceHolder } from "../../dataAccess/jsonPlaceHolder";

type UserResult = Promise<UserInterface | null>;

export const getProducts = async () => {
  try {
    const products = await getProductsFromJsonFile();
    return products;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};

export const getProduct = async (productId: string) => {
  try {
    const getProductFromMDB = await getProductByIdFromJsonFile(productId);
    console.log(getProductFromMDB);
    return getProductFromMDB;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};

export const decreaseProduct = async (
  productId: string,
  quantityToSubtract: number
) => {
  try {
    if (!productId) {
      throw new Error("Invalid productId");
    }
    const productDetailsResponse = await fetch(`/api/products/${productId}`);

    if (!productDetailsResponse.ok) {
      throw new Error("Failed to fetch product details");
    }

    const productData = await productDetailsResponse.json();

    let currentStockQuantity = productData.quantityInStock;
    currentStockQuantity -= quantityToSubtract;

    const updateStockResponse = await fetch(
      `/api/products/${productId}/stock`,
      {
        method: "PUT",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        // body: JSON.stringify({ quantityInStock: currentStockQuantity }),
      }
    );

    if (!updateStockResponse.ok) {
      throw new Error("Failed to update product stock");
    }

    return true;
  } catch (error) {
    console.error("Error decreasing product stock quantity:", error);
    return Promise.reject(error);
  }
};
