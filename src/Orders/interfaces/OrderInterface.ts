import ProductInterface from "../../products/interfaces/productInterface";

interface ordersInterface {
  userId: string;
  id: number;
  products: ProductInterface[];
  status: string;
  email: string;
  price: number;
  orderTime: Date;
  shippingDetails: {
    address: string;
    contactNumber: string;
  };
}

export default ordersInterface;
