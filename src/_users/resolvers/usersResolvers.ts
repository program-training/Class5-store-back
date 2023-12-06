import {
  getUser,
  getUsers,
  loginUser,
  registerAdmin,
  registerUser,
} from "../services/usersServices";

export const usersQueries = {
  getUser,
  getUsers,
};
export const usersMutations = {
  loginUser,
  registerAdmin,
  registerUser,
};
