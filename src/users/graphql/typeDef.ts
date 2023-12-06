import {
  usersTypeDefsMutations,
  usersTypeDefsQueries,
  usersTypeDefs,
} from "../../_users/typeDefs/userTypeDefs";

const typeDefs = `#graphql

    ${usersTypeDefs}

    type Query{
      ${usersTypeDefsQueries}
    }
    type Mutation {
      ${usersTypeDefsMutations}
    }

     `;

export default typeDefs;
