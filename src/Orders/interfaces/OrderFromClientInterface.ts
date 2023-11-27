import CartItemInterface from "./CartItemFromClientInterface";
import ShippingDetailsInterface from "./ShippingDetailsInterface";

type OrderFromClientInterface = {
  email: string;
  price: number;
  cartItems: CartItemInterface[];
  shippingDetails: ShippingDetailsInterface
};

export default OrderFromClientInterface;
