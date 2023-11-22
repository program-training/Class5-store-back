import chalk from "chalk";
import UserInterface from "../interfaces/UserInterface";
import { getUserByIdFromDb, registerUsersToDb } from "../dal/usersDal";
import User from "../models/mongoose/UserSchema";

export const getUserById = async (userId: string) => {
  try {
    const userFromMDB = await getUserByIdFromDb(userId);
    return userFromMDB;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const register = async (user: UserInterface) => {
  try {
    const userRegistered = await User.find({ email: user.email });
    if (userRegistered) throw new Error("This user is allready registered!");
    await registerUsersToDb(user);
    return user;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};