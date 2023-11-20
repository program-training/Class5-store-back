import jsonfile from "jsonfile";
import path from "path";
import { handleJsonfileError } from "../../utils/handleErrors";

const DB_URL = path.join(__dirname, "../../DB/orders.json");

export const getCollectionFromJsonFile = async () => {
  try {
    const data = await jsonfile.readFile(DB_URL);
    return data;
  } catch (error) {
    return handleJsonfileError(error);
  }
};

export const getOrdersFromDb = async () => {
  try {
    const data = await jsonfile.readFile(DB_URL);
    return data.orders;
  } catch (error) {
    return handleJsonfileError(error);
  }
};

export const addOrdersToDb = async (documents: Record<string, unknown>[]) => {
  try {
    const data = await getOrdersFromDb();
    const newData = { ...data.orders, documents };
    await jsonfile.writeFile(DB_URL, newData);
    return newData;
  } catch (error) {
    return handleJsonfileError(error);
  }
};
