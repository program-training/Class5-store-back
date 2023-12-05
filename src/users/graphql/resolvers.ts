import usersMutation from "./queries/userMutation";
import usersQueries from "./queries/userQueries";

const resolvers = {
  Query: {
    ...usersQueries,
  },
  Mutation: {
    ...usersMutation,
  },
};

console.log("resolvers:", resolvers);

export default resolvers;
