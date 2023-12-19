import {
  productsTypeDefsMutation,
  productsTypeDefsSubscriptions,
  productTypesDefs,
} from "../products_/typeDefs/productsTypeDefs";
import { productsTypeDefsQueries } from "../products_/typeDefs/productsTypeDefs";
import orderTypes, {
  ordersTypeMutation,
  ordersTypeQueries,
} from "../Orders/typeDef/orderTypes";
import {
  usersTypeDefsMutations,
  usersTypeDefsQueries,
  usersTypeDefs,
} from "../_users/typeDefs/userTypeDefs";

const typeDefs = `#graphql   
    ${productTypesDefs}
    ${orderTypes}
    ${usersTypeDefs}
  
  type Query{
    ${productsTypeDefsQueries}
    ${ordersTypeQueries}
    ${usersTypeDefsQueries}
  } 
  type Mutation{
    ${usersTypeDefsMutations}
    ${productsTypeDefsMutation}
    ${ordersTypeMutation}
  }
  type Subscription {
  ${productsTypeDefsSubscriptions}
  }
`;

export default typeDefs;
