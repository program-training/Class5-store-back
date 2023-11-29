import {
  getUserByIdFromDB,
  registerUserToDB,
  getUsersFromDB,
  userExistInDB,
  login,
} from "../dal/usersDal";
import { generateUserPassword } from "../helpers/bcrypt";
import UserInterface from "../interfaces/userInterface";
import { generateToken } from "../../auth/JWT";
import ServerError from "../../utils/ServerError";
import { convertToUserInterface } from "../../utils/convertUser";

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
    const userExist = await userExistInDB(user.email);
    if (userExist) {
      const convertedUser = convertToUserInterface(userExist);
      const token = generateToken(convertedUser);
      return token;
    }
    const userRegistered = await registerUserToDB(user);
    if (!userRegistered)
      throw new ServerError(401, "did not receive user from db");
    const convertedUser = convertToUserInterface(userRegistered);
    const token = generateToken(convertedUser);
    return token;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const registerAdminService = async (user: UserInterface) => {
  try {
    const userCheck = await userExistInDB(user.email);
    if (userCheck) return userCheck;
    if (user.initialPassword !== "secret")
      throw new ServerError(401, "unauthorized admin");
    user.password = generateUserPassword(user.password!);
    delete user.initialPassword;
    user.isAdmin = true;
    const userRegistered = await registerUserToDB(user);
    return userRegistered;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const loginService = async (email: string, password: string) => {
  try {
    const user = await login(email, password);
    if (!user) throw new ServerError(400, "unauthorized");
    const convertedUser = convertToUserInterface(user);
    const token = generateToken(convertedUser);
    return token;
  } catch (error) {
    return Promise.reject(error);
  }
};
