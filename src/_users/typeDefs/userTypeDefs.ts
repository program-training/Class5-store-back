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
    isAdmin: Boolean!

  }
  union Res = RegisterUser | Token

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
  signUpUser(input: RegisterUserInput): RegisterUser
  signUpAndSignInUser(input: RegisterUserInput): Token
  SignInUser(input: RegisterUserInput): Token
  registerAdmin(input: RegisterUserInput!): RegisterUser
`;
