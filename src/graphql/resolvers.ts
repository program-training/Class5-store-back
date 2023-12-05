import productsQueries from "../products_/queries/productsQuery";
import productQueries from "../products_/queries/productQuery";

const resolvers = {
  Query: {
    ...productsQueries,
    ...productQueries,
  },
};

export default resolvers;
import ordersQueries from "../Orders/queries/ordersQueries";

const resolvers = {
  Query: {
    ...ordersQueries,
  },
};

export default resolvers;
