type RegisterOrderFromClient = {
  _id?: string;
  email: string;
  price: number;
  cartItems: CartItems[];
  shippingDetails: ShippingDetails;
};

type CartItems = {
  productId: number;
  name: string;
  salePrice: string;
  quantity: number;
  description: string;
};

type ShippingDetails = {
  address: string;
  contactNumber: string;
  userId: string;
  registerOrderType: RegisterOrderType;
};

enum RegisterOrderType {
  standard = "STANDARD",
  express = "EXPRESS",
  pickup = "PICKUP",
}

export default RegisterOrderFromClient;
