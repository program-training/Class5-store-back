import {
  getProductsFromJsonFile,
  modifyProducts,
} from "../../dataAccess/jsonfileDAL";
import chalk from "chalk";
import UserInterface from "../interfaces/userInterface";
import { getUserById, insertUsers } from "../dal/usersDal";
import User from "../models/mongoose/UserSchema";

type UserResult = Promise<UserInterface | null>;

export const getUser = async (userId: string) => {
  try {
    console.log(1.1);

    const getUserFromMDB = await getUserById(userId);
    console.log(1.2);

    return getUserFromMDB;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};

export const register = async (user: UserInterface): UserResult => {
  try {
    const userRegistered = await User.find({ email: user.email });
    if (userRegistered) throw new Error("This user is allready registered!");
    await insertUsers(user);
    await modifyProducts("users");
    return user;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};

export const editUser = async (
  userId: string,
  userForUpdate: UserInterface
): UserResult => {
  try {
    const users = await getProductsFromJsonFile();
    if (users instanceof Error)
      throw new Error("Oops... Could not get the users from the Database");

    const index = users.findIndex(
      (user: { _id: string }) => user._id === userId
    );
    if (index === -1) throw new Error("Could not find user with this ID!");

    const usersCopy = [...users];
    const userToUpdate = { ...usersCopy[index], ...userForUpdate };
    usersCopy[index] = userToUpdate;

    const data = await modifyProducts("users");
    if (!data)
      throw new Error("Oops... something went wrong Could not Edit this user");
    return userToUpdate;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};

export const deleteUser = async (userId: string) => {
  try {
    const users = await getProductsFromJsonFile();
    if (users instanceof Error)
      throw new Error("Oops... Could not get the users from the Database");

    const user = users.find((user: { _id: string }) => user._id === userId);
    if (!user) throw new Error("Could not find user with this ID!");
    const filteredUser = users.filter(
      (user: { _id: string }) => user._id !== userId
    );

    const data = await modifyProducts("users");
    if (!data)
      throw new Error("Oops... something went wrong Could not Edit this user");
    return user;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};
