import CartItemInterface from "../interfaces/CartItemInterface";
import OrderFromClientInterface from "../interfaces/OrderFromClientInterface";
import OrdersInterface from "../interfaces/OrderInterface";

export const convertToOrder = (
  orderFromClient: OrderFromClientInterface
): OrdersInterface => {
  const { email, price, shippingDetails } = orderFromClient;
  const orderTime = new Date();
  const status = "pending";
  const cartItems: CartItemInterface[] = orderFromClient.cartItems.map(
    (cartItem) => {
      return {
        productId: cartItem.productId,
        name: cartItem.name,
        price: parseFloat(cartItem.salePrice),
        quantity: cartItem.quantity,
        description: cartItem.description,
      };
    }
  );
  return { email, price, shippingDetails, cartItems, orderTime, status };
};
