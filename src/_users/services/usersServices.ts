import {
  AdminRegisterMutation,
  AdminRegister,
  UserQuery,
  UserRegister,
  UserRegisterMutation,
  UserLogin,
  Login,
} from "../../users/resolvers/interface";

import {
  getUserByIdFromDB,
  registerUserToDB,
  getUsersFromDB,
  userExistInDB,
  loginToDB,
  userAdminInDB,
} from "../dal/usersDal";
import {
  comparePassword,
  generateUserPassword,
} from "../../users/helpers/bcrypt";
import {
  AdminInterface,
  UserInterface,
} from "../../users/interfaces/userInterface";
import { generateToken } from "../../auth/JWT";
import ServerError from "../../utils/ServerError";
import { convertToUserInterface } from "../../utils/convertUser";

export const getUsers = async () => {
  try {
    const users = await getUsersFromDB();
    return users;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};

export const getUser = async (parent: UserQuery, args: { _id: string }) => {
  try {
    const user = await getUserByIdFromDB(args._id);
    return user;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};

export const registerUser = async (
  parent: UserRegisterMutation,
  args: { input: UserRegister }
) => {
  try {
    const { email, password } = args.input;
    const newUser = {
      email,
      password,
    };
    const user = await registerUserService(newUser);
    return user;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};

export const registerUserService = async (user: UserInterface) => {
  try {
    const userExist = await userExistInDB(user.email);
    if (userExist) {
      const convertedUser = convertToUserInterface(userExist);
      // const token = generateToken(convertedUser);
      // return token;
      return convertedUser;
    }
    const userRegistered = await registerUserToDB(user);
    if (!userRegistered)
      throw new ServerError(401, "did not receive user from db");
    const convertedUser = convertToUserInterface(userRegistered);
    // const token = generateToken(convertedUser);
    // return token;
    return convertedUser;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const registerAdminService = async (user: AdminInterface) => {
  try {
    const adminExist = await userAdminInDB(user.isAdmin);
    if (adminExist) throw new ServerError(400, "Admin already exist");
    const comp = comparePassword;
    user.password = generateUserPassword(user.password!);
    delete user.initialPassword;
    user.isAdmin = true;
    const userRegistered = await registerUserToDB(user);
    const convertedUser = convertToUserInterface(userRegistered);
    return convertedUser;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const loginService = async (email: string, password: string) => {
  try {
    const user = await loginToDB(email, password);
    if (!user) throw new ServerError(400, "unauthorized");
    const convertedUser = convertToUserInterface(user);
    const token = generateToken(convertedUser);
    return token;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const registerAdmin = async (
  parent: AdminRegisterMutation,
  args: { input: AdminRegister }
) => {
  try {
    const { email, password, isAdmin } = args.input;
    const newUser = {
      email,
      password,
      isAdmin,
    };
    const user = await registerAdminService(newUser);
    return user;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};

export const loginUser = async (parent: UserLogin, args: { input: Login }) => {
  try {
    const { email, password } = args.input;
    const token = await loginService(email, password);
    return { token };
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};
