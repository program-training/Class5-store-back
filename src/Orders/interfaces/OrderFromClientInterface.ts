import CartItemFromClientInterface from "./CartItemFromClientInterface";
import ShippingDetailsInterface from "./ShippingDetailsInterface";

type OrderFromClientInterface = {
  email: number;
  price: number;
  cartItems: CartItemFromClientInterface[];
  shippingDetails: ShippingDetailsInterface;
};

export default OrderFromClientInterface;
