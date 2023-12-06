import {
  productsTypeDefsMutation,
  productTypesDefs,
} from "../products_/typeDefs/productsTypeDefs";
import { productsTypeDefsQueries } from "../products_/typeDefs/productsTypeDefs";
import orderTypes, { ordersTypeQueries } from "../Orders/typeDef/orderTypes";
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

  }
`;

export default typeDefs;
