export const usersTypeDefs = `
  type User {
    _id: ID!
    email: String!
    isAdmin: Boolean!
    password: String
    loginCount: Int
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

  input RegisterUserInput {
    email: String!
    password: String!
    isAdmin: Boolean!
  }
  input LoginUserInput {
    email: String!
    password: String!
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
  SignInUser(input: LoginUserInput): Token
  registerAdmin(input: RegisterUserInput!): RegisterUser
`;

export const usersTypeDefsSubscriptions = `
  userRegister: User

`;
