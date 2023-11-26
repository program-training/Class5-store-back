import {
  getUserByIdFromDB,
  registerUserToDB,
  getUsersFromDB,
  userExistInDB,
} from "../dal/usersDal";
import UserInterface from "../interfaces/userInterface";

export const getUsersService = async () => {
  try {
    const users = await getUsersFromDB();
    return users;
  } catch (error) {
    return Promise.reject(error);
  }
};
export const getUserByIdService = async (userId: string) => {
  try {
    const getUserFromMDB = await getUserByIdFromDB(userId);
    return getUserFromMDB;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const registerUserService = async (user: UserInterface) => {
  try {
    let userCheck = await userExistInDB(user.email);
    if (userCheck) return userCheck;
    const userRegistered = await registerUserToDB(user);
    return userRegistered;
  } catch (error) {
    return Promise.reject(error);
  }
};
