import { getOrderByUserIdFromDB, getOrdersFromDB } from "../dal/orderDal";

export const getOrders = async () => {
  try {
    const orders = await getOrdersFromDB();
    return orders;
  } catch (error) {
    console.log(error);
    return null;
  }
};

interface GetOrderInterface {
  id: string;
}

export const getOrderByUserId = async (_: any, { id }: GetOrderInterface) => {
  try {
    const order = await getOrderByUserIdFromDB(id);
    console.log(order);
    return order[0];
  } catch (error) {
    console.log(error);
    return "null";
  }
};
