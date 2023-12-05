import ordersQueries from "../Orders/queries/ordersQueries";
import {
  productsMutation,
  productsQueries,
} from "../products_/queries/productsQuery";

const resolvers = {
  Query: {
    ...productsQueries,
    ...ordersQueries,
  },
  Mutation: {
    ...productsMutation,
  },
};

export default resolvers;
