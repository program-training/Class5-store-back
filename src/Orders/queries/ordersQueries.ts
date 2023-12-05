import { getOrders, getOrderByUserId } from "../resolvers/ordersResolvers";

const ordersQueries = {
  getOrders,
  getOrderByUserId,
};

export default ordersQueries;
