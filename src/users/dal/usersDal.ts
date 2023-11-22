import UserInterface from "../interfaces/UserInterface";
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
    const registeredUser = new User(user);
    await registeredUser.save();
    return registeredUser;
  } catch (error) {
    return Promise.reject(error);
  }
};
