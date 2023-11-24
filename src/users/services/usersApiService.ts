import {
  getUserByIdFromDb,
  registerUserToDb,
  getUsersFromDb,
  userExist,
} from "../dal/usersDal";
import UserInterface from "../interfaces/userInterface";

export const getUsers = async () => {
  try {
    const users = await getUsersFromDb();
    return users;
  } catch (error) {
    return Error;
  }
};
export const getUser = async (userId: string) => {
  try {
    const getUserFromMDB = await getUserByIdFromDb(userId);
    return getUserFromMDB;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const register = async (user: UserInterface) => {
  try {
    let userCheck = await userExist(user.email);
    if (userCheck) return userCheck;
    const userRegistered = await registerUserToDb(user);
    return userRegistered;
  } catch (error) {
    return Promise.reject(error);
  }
};
