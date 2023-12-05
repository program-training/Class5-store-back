import productTypes from "../products_/typeDefs/productsTypes";
import { productsTypeQueries } from "../products_/typeDefs/productsTypes";
import orderTypes, { ordersTypeQueries } from "../Orders/typeDef/orderTypes";

const typeDefs = `#graphql   
    ${productTypes}
    ${orderTypes}
  
  type Query{
    ${productsTypeQueries}
    ${ordersTypeQueries}

  } 
`;

export default typeDefs;
