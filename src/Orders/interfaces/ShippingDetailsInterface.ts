interface ShippingDetailsInterface {
  address: string;
  contactNumber: string;
  userId: string;
  orderType: RegisterOrderType;
}

enum RegisterOrderType {
  standard = "standard",
  express = "express",
  pickup = "pickup",
}

export default ShippingDetailsInterface;
