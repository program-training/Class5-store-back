import {
  usersTypeMutation,
  usersTypeQueries,
  usersTypes,
} from "./typeDefs/userTypes";

const typeDefs = `#graphql   
  
    ${usersTypes}
  
    type Query{
      ${usersTypeQueries}
    } 
    type Mutation {
      ${usersTypeMutation}
    }
  
     `;

export default typeDefs;
