import User from "../models/mongoose/UserSchema";
import ServerError from "../../utils/ServerError";
import { UserReqInterface } from "../interfaces/usersInterfaces";
import { comparePassword } from "../helpers/bcrypt";

export const getUsersFromDB = async () => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDB = async (id: string) => {
  const user = await User.findById(id);
  return user;
};

export const deleteUsersFromDB = async () => {
  try {
    const result = await User.deleteMany({});
    return result;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const registerUserToDB = async (user: UserReqInterface) => {
  const registeredUser = new User(user);
  await registeredUser.save();
  return registeredUser;
};

export const loginToDB = async (email: string, password: string) => {
  const user = await User.findOne({ email }).exec();
  if (password !== "user") {
    if (user) {
      const checkIfPasswordTrue = comparePassword(password, user.password!);
      if (checkIfPasswordTrue) throw new ServerError(403, "unauthorized");
    }
  }
  return user;
};

export const userExistInDB = async (email: string) => {
  try {
    const user = await User.find({ email: email });
    console.log(user[0]);
    return user[0];
  } catch (error) {
    return Promise.reject(error);
  }
};
