import {
  getOrderByUserIdFromJsonFile,
  getOrdersFromJsonFile,
} from "../dal/orderDal";

export const getOrdersFromDb = async () => {
  try {
    const AllOrders = await getOrdersFromJsonFile();
    return AllOrders;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getOrderByUserId =async (id:string) => {
  try {
    return await getOrderByUserIdFromJsonFile(id)
  } catch (error) {
    return Promise.reject(error);
  }
}
