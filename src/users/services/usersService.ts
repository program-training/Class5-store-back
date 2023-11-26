import {
  getUserByIdFromDB,
  registerUserToDB,
  getUsersFromDB,
  userExistInDB,
  Login,
} from "../dal/usersDal";
import { generateUserPassword } from "../helpers/bcrypt";
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
    //מצפין את הסיסמה
    user.password = generateUserPassword(user.password!);
    const userRegistered = await registerUserToDB(user);
    return userRegistered;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const LoginService = async (email: string, password: string) => {
  try {
    const user = await Login(email, password);
    return user;
  } catch (error) {
    return Promise.reject(error);
  }
};
