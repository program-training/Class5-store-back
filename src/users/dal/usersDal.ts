import User from "../models/mongoose/UserSchema";
import { UserInterface } from "../interfaces/userInterface";
import { comparePassword } from "../helpers/bcrypt";
import ServerError from "../../utils/ServerError";

export const getUsersFromDB = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getUserByIdFromDB = async (id: string) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const initialDataToDB = async (users: UserInterface[]) => {
  try {
    const usersInDB = await User.find();
    if (usersInDB.length) return "there are already users in DB";
    const result = await User.insertMany(users);
    return result;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteUsersFromDB = async () => {
  try {
    const result = await User.deleteMany({});
    return result;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const registerUserToDB = async (user: UserInterface) => {
  try {
    const registeredUser = new User(user);
    await registeredUser.save();
    return registeredUser;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const login = async (email: string, password: string) => {
  try {
    const user = await User.findOne({ email }).exec();
    const checkIfPasswordTrue = comparePassword(password, user?.password!);
    if (checkIfPasswordTrue) throw new ServerError(403, "unauthorized");
    return user;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const userExistInDB = async (email: string) => {
  try {
    const user = await User.find({ email: email });
    return user[0];
  } catch (error) {
    return Promise.reject(error);
  }
};

export const userAdminInDB = async (isAdmin: boolean) => {
  try {
    const user = await User.find({ isAdmin: isAdmin });
    return user[0].isAdmin;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const isAdmin = async (user: UserInterface) => {
  try {
    const isAdmin = await User.findOne({ isAdmin: true });
    const correctPassword = comparePassword(
      user.initialPassword!,
      isAdmin?.password!
    );
    if (!correctPassword) throw new ServerError(403, "unauthorized");
    const { initialPassword, ...userDetails } = user;
    const newAdmin = new User(userDetails);
    await newAdmin.save();
    return "admin registered successfully";
  } catch (error) {
    return Promise.reject(error);
  }
};
