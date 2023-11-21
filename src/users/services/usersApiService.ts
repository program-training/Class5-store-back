import { v1 as uuid1 } from "uuid";
import { comparePassword, generateUserPassword } from "../helpers/bcrypt";
import { getProductsFromJsonFile } from "../../dataAccess/jsonfileDAL";
import chalk from "chalk";
import userValidation from "../models/joi/userValidation";
import { getDataFromDummy } from "../../dataAccess/dummyjson";
import { addDataToJsonPlaceHolder } from "../../dataAccess/jsonPlaceHolder";

import { generateAuthToken } from "../helpers/token";
import UserInterface from "../interfaces/userIntarface";
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
    return user;
  } catch (error) {
    console.log(chalk.redBright(error));
    return Promise.reject(error);
  }
};
