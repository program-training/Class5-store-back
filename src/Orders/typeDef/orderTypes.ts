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

`;

export const ordersTypeQueries = `
  getOrders: [Order]
  getOrderByUserId(id: ID!): Order
  getOrderById(id: ID!): Order
`;

export default orderTypes;
