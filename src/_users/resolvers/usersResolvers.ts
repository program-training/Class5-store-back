import {
  getUser,
  getUsers,
  signUpUser,
  signUpAndSignInUser,
  SignInUser,
  userRegister,
} from "../services/usersServices";

export const usersQueries = {
  getUser,
  getUsers,
};
export const usersMutations = {
  signUpUser,
  signUpAndSignInUser,
  SignInUser,
};
export const usersSubscriptions = {
  userRegister,
};
