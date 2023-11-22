import { getUserByIdFromDb,registerUserToDb } from "../dal/usersDal";
import UserInterface from "../interfaces/userInterface";
import User from "../models/mongoose/UserSchema";

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
    if (userRegistered) throw new Error("This user is already registered!");
    await registerUserToDb(user);
    return user;
  } catch (error) {
    return Promise.reject(error);
  }
};