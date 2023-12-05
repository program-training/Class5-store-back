import ordersQueries from "../Orders/queries/ordersQueries";
import {
  productsMutations,
  productsQueries,
} from "../products_/queries/productsQuery";

const resolvers = {
  Query: {
    ...productsQueries,
    ...ordersQueries,
  },
  Mutations: {
    ...productsMutations,
  },
};

export default resolvers;
