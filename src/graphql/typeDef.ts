import orderTypes, { ordersTypeQueries } from "../Orders/typeDef/orderTypes";

const typeDefs = `#graphql   

  ${orderTypes}

  type Query{
    ${ordersTypeQueries}
  } 

   `;

export default typeDefs;
