import ProductInterface from "../../products/interfaces/productInterface";

type OrderFromClientInterface = {
  userId: string;
  email: string;
  price: number;
  products: ProductInterface[];
  shippingDetails: {
    address: string;
    contactNumber: string;
  };
};

export default OrderFromClientInterface