import productsQueries from "../products_/queries/productsQuery";
import ordersQueries from "../Orders/queries/ordersQueries";

const resolvers = {
  Query: {
    ...productsQueries,
    ...ordersQueries,
  },
};

export default resolvers;
