import CartItemInterface from "./CartItemInterface";

interface ordersInterface {
  id?: number | string;
  cartItems: CartItemInterface[];
  status: "pending" | "processing" | "shipped" | "delivered" | "completed";
  email: string;
  price: number;
  orderTime: Date;
  shippingDetails: {
    orderType: "standard" | "express" | "pickup";
    address: string;
    contactNumber: string;
    userId: string | number;
  };
}

export default ordersInterface;
