import UserInterface from "../interfaces/userIntarface";
import User from "../models/mongoose/UserSchema";

export const getUserByIdFromDb = async (id: string) => {
  try {
    return await User.findById(id);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const registerUserToDb = async (user: UserInterface) => {
  try {
    const newUser = new User(user);
    const userFromDB = await newUser.save();
    return userFromDB;
  } catch (error) {
    if (error instanceof Error) return Promise.reject(error);
  }
};