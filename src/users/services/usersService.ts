import { string } from "joi";
import {
  getUserByIdFromDB,
  registerUserToDB,
  getUsersFromDB,
  userExistInDB,
  Login,
} from "../dal/usersDal";
import { generateUserPassword } from "../helpers/bcrypt";
import UserInterface from "../interfaces/userInterface";
import { token } from "morgan";
import { generateToken } from "../../auth/JWT";
import ServerError from "../../utils/ServerError";

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

//רושם משתמש לדאטהבייס
export const registerUserService = async (user: UserInterface) => {
  try {
    //אם המשתמש קיים שולח טוקן
    const userCheck = await userExistInDB(user.email);
    if (userCheck) {
      const id = userCheck._id.toString();
      const token = generateToken(id, false);
      return token;
    }
    //אם המשתמש לא קיים רושם אותו ושולח טוקן
    const userRegistered = await registerUserToDB(user);
    if (!userRegistered)
      throw new ServerError(401, "did not recieve user from db");
    const _id = userRegistered?._id.toString();
    const newToken = generateToken(_id!);
    return newToken;
  } catch (error) {
    return Promise.reject(error);
  }
};

//רושם אדמין לדאטהבייס
export const registerAdminService = async (user: UserInterface) => {
  try {
    let userCheck = await userExistInDB(user.email);
    if (userCheck) return userCheck;
    if (user.initialPassword !== "secret")
      throw new ServerError(401, "unauthrized admin");
    //מצפין את הסיסמה
    user.password = generateUserPassword(user.password!);
    const userRegistered = await registerUserToDB(user);
    return userRegistered;
  } catch (error) {
    return Promise.reject(error);
  }
};
//מנהל התחברות לאתר
export const LoginService = async (email: string, password: string) => {
  try {
    const user = await Login(email, password);
    if (!user) throw new Error();
    const id = user._id.toString();
    const token = generateToken(id, user.isAdmin);
    return token;
  } catch (error) {
    return Promise.reject(error);
  }
};
