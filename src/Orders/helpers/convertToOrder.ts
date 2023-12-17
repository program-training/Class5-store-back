import CartItemInterface from "../interfaces/CartItemInterface";
import OrderFromClientInterface from "../interfaces/OrderFromClientInterface";
import OrderInterface from "../interfaces/OrderInterface";

export const convertToOrder = (
  orderFromClient: OrderFromClientInterface
): OrderInterface => {
  const { email, price, shippingDetails } = orderFromClient;
  const orderTime = new Date();
  const status = "pending";
  const cartItems: CartItemInterface[] = orderFromClient.cartItems.map(
    (cartItem) => {
      return {
        productId: cartItem.productId,
        name: cartItem.name,
        quantity: cartItem.quantity,
        description: cartItem.description,
        price: Number(cartItem.salePrice),
      };
    }
  );

  return { email, price, shippingDetails, cartItems, orderTime, status };
};
