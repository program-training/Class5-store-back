const orderTypes = `
type CartItemSchema {
  productId: Int
  name: String
  description: String
  price: Int
  quantity: Int
}

type ShippingDetails {
  address: String!
  userId: String!
  contactNumber: String!
  orderType: String!
}

type Order {
  _id: ID
  cartItems: [CartItemSchema]!
  orderTime: String!
  status: String!
  price: Int!
  shippingDetails: ShippingDetails!
}

input CartItems {
  productId: Int!
  name: String!
  salePrice: String!
  quantity: Int!
  description: String!
}

input RegisterShippingDetailsInput {
  address: String!
  contactNumber: String!
  userId: String!
  registerOrderType: RegisterOrderType!
}

enum RegisterOrderType {
  STANDARD
  EXPRESS
  PICKUP
}

input OrderFromClient {
  email: String!
  price: Int!
  cartItems: [CartItems]!
  shippingDetails: RegisterShippingDetailsInput!
}

type RegisterShippingDetails {
  address: String!
  contactNumber: String!
  userId: String!
  registerOrderType: RegisterOrderType!
}

type RegisterOrder {
  _id: ID
  cartItems: [CartItemSchema]!
  orderTime: String!
  status: String!
  price: Int!
  shippingDetails: RegisterShippingDetails!
}
`;

export const ordersTypeQueries = `
  getOrders: [Order]
  getOrderByUserId(id: ID!): Order
  getOrderById(id: ID!): Order
`;

export const ordersTypeMutation = `
  registerOrder(order: OrderFromClient!): RegisterOrder
`;

export default orderTypes;
