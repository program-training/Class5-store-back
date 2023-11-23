import ProductInterface from "../../products/interfaces/productInterface";
import CartItemInterface from "./CartItemInterface";

type OrderFromClientInterface = {
  email: string;
  price: number;
  cartItems: CartItemInterface[];
  shippingDetails: {
    address: string;
    contactNumber: string;
    userId: string;
    orderType: "standard" | "express" | "pickup";
  };
};

export default OrderFromClientInterface;
