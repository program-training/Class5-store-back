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
  orderType: RegisterOrderType;
};

enum RegisterOrderType {
  standard = "standard",
  express = "express",
  pickup = "pickup",
}

export default RegisterOrderFromClient;
