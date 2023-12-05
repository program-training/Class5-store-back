import productsQueries from "../products_/queries/productsQuery";
import productQueries from "../products_/queries/productQuery";
import ordersQueries from "../Orders/queries/ordersQueries";

const resolvers = {
  Query: {
    ...productsQueries,
    ...productQueries,
    ...ordersQueries,
  },
};

export default resolvers;
