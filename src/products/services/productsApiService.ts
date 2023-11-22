import {
  getProductByIdFromJsonFile,
  getProductsFromJsonFile,
} from "../../dataAccess/jsonfileDAL";
import chalk from "chalk";

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

export const updateProductQuantity = async (
  productId: number,
  quantity: number
) => {
  try {
    const products = await getProductsFromJsonFile();
    return new Promise((resolve) => {
      const productIndex = products.find(
        (product: { id: number }) => product.id === productId
      );

      if (productIndex !== -1) {
        const updatedProduct = {
          ...products[productIndex],
          quantity: products[productIndex].quantity - quantity,
        };

        products[productIndex] = updatedProduct;
        resolve(updatedProduct);
      } else {
        resolve(undefined);
      }
    });
  } catch (error) {
    throw new Error("Error updating product quantity");
  }
};
