export const usersTypeDefs = `
  type User {
    _id: ID!
    email: String!
    isAdmin: Boolean!
    password: String
  }

  type RegisterUser {
    _id: ID!
    email: String!
    isAdmin: Boolean!
  }

  type Token {
    token: String!
  }

  input RegisterUserInput {
    email: String!
    password: String!
    isAdmin: Boolean!
  }

  input Login {
    email: String!
    password: String!
  }
`;

export const usersTypeDefsQueries = `
  getUsers:[User!]!
  getUser(_id: String!): User
`;
export const usersTypeDefsMutations = `
  registerUser(input: RegisterUserInput!): RegisterUser
  registerAdmin(input: RegisterUserInput!): RegisterUser
  loginUser(input: Login): Token
`;
