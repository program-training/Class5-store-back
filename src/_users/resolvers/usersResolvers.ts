import {
  getUser,
  getUsers,
  signUpUser,
  signUpAndSignInUser,
  SignInUser,
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
