interface ShippingDetailsInterface {
  address: string;
  contactNumber: string;
  userId: string;
  registerOrderType: RegisterOrderType;
}

enum RegisterOrderType {
  standard = "STANDARD",
  express = "EXPRESS",
  pickup = "PICKUP",
}

export default ShippingDetailsInterface;
