import ProductInterface from "../../products/interfaces/productInterface";

interface ordersInterface {
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
