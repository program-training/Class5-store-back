import mongoose, { Schema } from "mongoose";

const CartItemSchema = new Schema({
  productId: Number,
  name: String,
  description: String,
  price: Number,
  quantity: Number,
});

export const OrderSchema = new Schema({
  cartItems: [CartItemSchema],
  orderTime: Date,
  status: String,
  price: Number,
  shippingDetails: {
    address: String,
    userId: String,
    contactNumber: String,
    orderType: String,
  },
});

export const Order = mongoose.model("order", OrderSchema);

const CartItems = new Schema({
  productId: Number,
  name: String,
  salePrice: String,
  quantity: Number,
  description: String,
});

const OrderType = new Schema({
  type: {
    type: String,
    enum: {
      values: ["standard", "express", "pickup"],
    },
  },
});

const ShippingDetails = new Schema({
  address: String,
  contactNumber: String,
  userId: String,
  orderType: OrderType,
});

const RegisterOrderFromClient = new Schema({
  email: String,
  price: Number,
  cartItems: [CartItems],
  shippingDetails: ShippingDetails,
});

export const RegisterOrder = mongoose.model(
  "registerOrder",
  RegisterOrderFromClient
);
