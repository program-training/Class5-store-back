import User from "../../users/models/mongoose/UserSchema";
import { UserInterface } from "../../users/interfaces/userInterface";
import { comparePassword } from "../../users/helpers/bcrypt";
import ServerError from "../../utils/ServerError";

export const getUsersFromDB = async () => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDB = async (id: string) => {
  const user = await User.findById(id);
  return user;
};

export const initialDataToDB = async (users: UserInterface[]) => {
  const usersInDB = await User.find();
  if (usersInDB.length) return "there are already users in DB";
  const result = await User.insertMany(users);
  return result;
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
  const registeredUser = new User(user);
  await registeredUser.save();
  return registeredUser;
};

export const loginToDB = async (email: string, password: string) => {
  const user = await User.findOne({ email }).exec();
  const checkIfPasswordTrue = comparePassword(password, user?.password!);
  if (checkIfPasswordTrue) throw new ServerError(403, "unauthorized");
  return user;
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
  const user = await User.find({ isAdmin: isAdmin });
  return user[0].isAdmin;
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
