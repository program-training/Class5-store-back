export const usersTypes = `
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
    password: String
  }

  input Login {
    email: String!
    password: String!
  }
`;

export const usersTypeQueries = `
  getUsers:[User!]!
  getUser(_id: String!): User
`;
export const usersTypeMutation = `
  registerUser(input: RegisterUserInput!): RegisterUser
  registerAdmin(input: RegisterUserInput!): RegisterUser
  loginUser(input: Login): Token
`;
