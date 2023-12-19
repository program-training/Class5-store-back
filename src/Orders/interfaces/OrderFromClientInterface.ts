import CartItemFromClientInterface from "./CartItemFromClientInterface";
import ShippingDetailsInterface from "./ShippingDetailsInterface";

type OrderFromClientInterface = {
  email: string;
  price: number;
  cartItems: CartItemFromClientInterface[];
  shippingDetails: ShippingDetailsInterface;
};

export default OrderFromClientInterface;
