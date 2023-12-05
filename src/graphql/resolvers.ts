import ordersQueries from "../Orders/queries/ordersQueries";

const resolvers = {
  Query: {
    ...ordersQueries,
  },
};

export default resolvers;
