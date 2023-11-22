import UserInterface from "../interfaces/UserInterface";
import { getUserByIdFromDb, registerUserToDb } from "../dal/usersDal";

export const getUserById = async (id: string) => {
  try {
    const user = await getUserByIdFromDb(id);
    return user;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const registerUser = async (user: UserInterface) => {
  try {
    const registeredUser = await registerUserToDb(user);
    return registeredUser;
  } catch (error) {
    return Promise.reject(error);
  }
};
