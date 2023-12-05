import productsQueries from "../products_/queries/productsQuery";
import ordersQueries from "../Orders/queries/ordersQueries";
import usersQueries from "../users/queries/userQueries";
import usersMutation from "../users/queries/userMutation";

const resolvers = {
  Query: {
    ...productsQueries,
    ...ordersQueries,
    ...usersQueries,
  },
  Mutation: {
    ...usersMutation,
  },
};

export default resolvers;
