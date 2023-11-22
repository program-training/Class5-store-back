import {
  getUserByIdFromDb,
  registerUserToDb,
  getUsersFromDb,
} from "../dal/usersDal";
import UserInterface from "../interfaces/userInterface";
import User from "../models/mongoose/UserSchema";

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
    const userRegistered = await User.find({ email: user.email });
    if (userRegistered) return userRegistered;
    await registerUserToDb(user);
    return user;
  } catch (error) {
    return Promise.reject(error);
  }
};
