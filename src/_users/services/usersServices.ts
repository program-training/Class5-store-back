import {
  UserReqInterface,
  UserResInterface,
} from "../interfaces/usersInterfaces";
import {
  getUserByIdFromDB,
  registerUserToDB,
  getUsersFromDB,
  userExistInDB,
  loginToDB,
} from "../dal/usersDal";
import { generateToken } from "../../auth/JWT";
import ServerError from "../../utils/ServerError";
import { convertUserForSending } from "../utils/usersUtils";
import { cacheUsers } from "../cache/usersCache";
import { redisClient } from "../../redis/client/client";
import { PubSub } from "graphql-subscriptions";
const pubsub = new PubSub();
export const getUsers = async () => {
  try {
    const cachedUsers = await cacheUsers();
    if (cachedUsers) return cachedUsers;
    const users = await getUsersFromDB();
    const stringedJSON = JSON.stringify(users);
    const fixedUsers = JSON.parse(stringedJSON);
    redisClient.json.set("users", ".", fixedUsers);
    return users;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};
export const getUser = async (_: ParentNode, args: { _id: string }) => {
  try {
    const user = await getUserByIdFromDB(args._id);
    return user;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};
const register = async (user: UserReqInterface) => {
  if (await userExistInDB(user.email))
    throw new ServerError(
      401,
      "it is not possible to register again with an existing email"
    );
  const userRegistered = await registerUserToDB(user);
  if (!userRegistered)
    throw new ServerError(401, "did not receive user from db");
  return convertUserForSending(userRegistered as UserResInterface);
};
const login = async (user: UserReqInterface) => {
  const userLogin = await loginToDB(user.email, user.password);
  if (!userLogin) {
    throw new ServerError(400, "unauthorized");
  } else {
    const { _id, email, password, isAdmin } = userLogin;
    if (typeof password !== "string") {
      throw new Error("Password is not a string!");
    }
    const token = generateToken({ _id, email, password, isAdmin });
    return { token: token, isAdmin: user.isAdmin };
  }
};
export const signUpUser = async (
  _: ParentNode,
  args: { input: UserReqInterface }
) => {
  try {
    const user_register = await register(args.input);
    pubsub.publish("USER_REGISTER", {
      userRegister: {
        ...user_register,
      },
    });
    return user_register;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};
// export const signUpAndSignInUser = async (
//   _: ParentNode,
//   args: { input: UserReqInterface }
// ) => {
//   try {
//     await register(args.input);
//     return login(args.input);
//   } catch (error) {
//     if (error instanceof Error) console.log(error.message);
//     return null;
//   }
// };
export const SignInUser = async (
  _: ParentNode,
  args: { input: UserReqInterface }
) => {
  try {
    return login(args.input);
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
    return null;
  }
};
export const userRegister = {
  subscribe: () => pubsub.asyncIterator(["USER_REGISTER"]),
};
