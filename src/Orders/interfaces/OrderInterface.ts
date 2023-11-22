import ProductInterface from "../../products/interfaces/ProductInterface";

interface OrdersInterface {
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

export default OrdersInterface;
