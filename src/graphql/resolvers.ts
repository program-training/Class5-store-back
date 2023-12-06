import ordersQueries from "../Orders/queries/ordersQueries";
import {
  productsMutations,
  productsQueries,
} from "../products_/resolvers/productsResolvers";
import {usersMutations, usersQueries} from "../_users/resolvers/usersResolvers";

const resolvers = {
  Query: {
    ...productsQueries,
    ...ordersQueries,
    ...usersQueries,
  },
  Mutation: {
    ...usersMutations,
    ...productsMutations,
  },
};

export default resolvers;
