import {
  getOrders,
  getOrderByUserId,
  getOrderById,
  registerOrder,
} from "../services/ordersServices";

export const ordersQueries = {
  getOrders,
  getOrderByUserId,
  getOrderById,
};

export const OrdersMutation = {
  registerOrder,
};
