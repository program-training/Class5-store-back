import ProductInterface from "../../products/interfaces/productInterface";

interface ordersInterface {
  userId: string;
  id: number;
  products: ProductInterface[];
  status: "pending" | "processing" | "shipped" | "delivered" | "completed";
  email: string;
  price: number;
  orderTime: Date;
  shippingDetails: {
    // orderType: "standard"| "express" | "pickup"
    address: string;
    contactNumber: string;
  };
}

export default ordersInterface;
