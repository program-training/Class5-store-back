import productTypes from "../products_/typeDefs/productsTypes";
import { productsTypeQueries } from "../products_/typeDefs/productsTypes";
import orderTypes, { ordersTypeQueries } from "../Orders/typeDef/orderTypes";
import {
  usersTypeMutation,
  usersTypeQueries,
  usersTypes,
} from "../users/typeDefs/userTypes";

const typeDefs = `#graphql   
    ${productTypes}
    ${orderTypes}
    ${usersTypes}
  
  type Query{
    ${productsTypeQueries}
    ${ordersTypeQueries}
    ${usersTypeQueries}
  } 
  type Mutation{
    ${usersTypeMutation}
  }
`;

export default typeDefs;
