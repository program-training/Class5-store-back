import ordersQueries from "../Orders/queries/ordersQueries";
import {
  productsMutation,
  productsQueries,
} from "../products_/queries/productsQuery";
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

    ...productsMutation,
  },
};

export default resolvers;
