import User from "../models/mongoose/UserSchema";
import UserInterface from "../interfaces/userInterface";
import { initialUser } from "../../initialData/initialData";
//מקבל את כל היוזרים מהדאטה בייס
export const getUsersFromDb = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    return Promise.reject(error);
  }
};

//מקבל יוזר לפי ת"ז
export const getUserByIdFromDb = async (id: string) => {
  try {
    return await User.findById(id);
  } catch (error) {
    return Promise.reject(error);
  }
};

//רושם יוזר
export const registerUserToDb = async (user: UserInterface) => {
  try {
    const newUser = new User(user);
    const userFromDB = await newUser.save();
    return userFromDB;
  } catch (error) {
    if (error instanceof Error) return Promise.reject(error);
  }
};

//בודק אם יש יוזרים בדאטה בייס ואם אין מכניס חדשים
export const initialDataToDB = async (users: initialUser[]) => {
  try {
    const usersInDb = await User.find();
    if (usersInDb.length === 0) {
      const result = await User.insertMany(users);
      return result;
    }
    return "there are already users in DB";
  } catch (error) {
    return Promise.reject(error);
  }
};

//מוחק מוצרים לפי תנאי
export const deleteUsers = async () => {
  try {
    const result = await User.deleteMany({});
    return result;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const userExist = async (email: string) => {
  try {
    return await User.find({ email: email });
  } catch (error) {
    return Promise.reject(error);
  }
};
