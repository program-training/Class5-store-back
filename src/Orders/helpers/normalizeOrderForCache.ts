// import { object } from "joi";
// import OrderInterface from "../interfaces/OrderInterface";

// export const normalizeOrderForCache = (order: OrderInterface) => {
//   if (typeof order !== "object") throw new Error("'orders' mast be an object!");

//   return {
//     _id: order._id,
//     cartItems: order.cartItems,
//     status: order.status,
//     email: order.email,
//     price: order.price,
//     orderTime: order.orderTime,
//     shippingDetails: order.shippingDetails,
//   } as OrderInterface;
// };

// export const normalizedOrdersForCache = (orders: OrderInterface[]) => {
//   return orders.map(<T extends OrderInterface>(order: T) =>
//     normalizeOrderForCache(order)
//   );
// };
