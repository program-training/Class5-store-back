export const usersTypes = `#graphql
  type User {
    _id: ID!
    email: String!
    isAdmin: Boolean!
    password: String!
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
    password: String
  }

  input Login {
    email: String!
    password: String!
  }
`;

export const usersTypeQueries = `#graphql
  getUsers:[User!]!
  getUser(_id: String!): User
`;
export const usersTypeMutation = `#graphql
  registerUser(input: RegisterUserInput!): User
  registerAdmin(input: RegisterUserInput!): RegisterUser
  loginUser(input: Login): Token
`;
