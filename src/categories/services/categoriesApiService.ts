import chalk from "chalk";
import {
  getAllCategoriesFromMongoDB,
  getCategoryById,
} from "../../dataAccess/mongoose";
import CategoryInterface from "../interfaces/CategoryInterface";


export const getCategories = async () => {
  try {
    const categories = await getAllCategoriesFromMongoDB();
    return categories;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};

export const getCategory = async (productId: string) => {
  try {
    const getCategoryFromMDB = await getCategoryById(productId);
    console.log(getCategoryFromMDB);
    return getCategoryFromMDB;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};

export const editCategory = async (
  categoryName: string,
  categoryToUpdate: CategoryInterface
) => {
  try {
    const categories = await getAllCategoriesFromMongoDB();
    if (categories instanceof Error) {
      throw new Error("Oops... Could not get the categories from the Database");
    }
    const index = categories.findIndex(
      (category) => (category.category_name = categoryName)
    );
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};
