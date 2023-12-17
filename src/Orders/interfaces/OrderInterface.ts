import CartItemInterface from "./CartItemInterface";
import ShippingDetailsInterface from "./ShippingDetailsInterface";

interface OrderInterface {
  _id?: string;
  cartItems: CartItemInterface[];
  status: "pending" | "processing" | "shipped" | "delivered" | "completed";
  email: string;
  price: number;
  orderTime: Date;
  shippingDetails: ShippingDetailsInterface;
}

export default OrderInterface;
