import User from "../models/mongoose/UserSchema";
import {
  loginService,
  registerAdminService,
  registerUserService,
} from "../services/usersService";
import {
  AdminRegisterMutation,
  AdminRegister,
  UserQuery,
  UserRegister,
  UserRegisterMutation,
  UserLogin,
  Login,
} from "./interface";

export const getUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};

export const getUser = async (parent: UserQuery, args: { _id: string }) => {
  try {
    const user = await User.findById(args._id);
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

export const registerAdmin = async (
  parent: AdminRegisterMutation,
  args: { input: AdminRegister }
) => {
  try {
    const { email, password } = args.input;
    const newUser = {
      email,
      password,
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
