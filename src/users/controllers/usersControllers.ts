import {
  LoginService,
  getUserByIdService,
  getUsersService,
  registerAdminService,
  registerUserService,
} from "../services/usersService";
import { handleError } from "../../utils/handleErrors";
import userValidation from "../models/joi/userValidation";
import { Request, Response } from "express";
import UserInterface from "../interfaces/userInterface";
import { Login } from "../dal/usersDal";
import adminValidation from "../models/joi/adminValidation";

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getUsersService();
    return res.send(users);
  } catch (error) {
    handleError(res, error);
  }
};

//
export const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const { id: userId } = req.params;
    const user = await getUserByIdService(userId);
    return res.send(user);
  } catch (error) {
    handleError(res, error);
  }
};

//קונטרולר לרישום אדמינים
export const registerAdminController = async (req: Request, res: Response) => {
  try {
    const user: UserInterface = req.body;
    const { error } = adminValidation(user);
    if (error?.details[0].message) throw new Error(error?.details[0].message);
    const userFromDB = await registerAdminService(user);
    return res.status(200).send(userFromDB);
  } catch (error) {
    handleError(res, error);
  }
};

//קונטרולר להרשמה של יוזר
export const registerUserController = async (req: Request, res: Response) => {
  try {
    const user: UserInterface = req.body;

    const { error } = userValidation(user);
    if (error?.details[0].message) throw new Error(error?.details[0].message);

    const token = await registerUserService(user);
    return res.status(200).send(token);
  } catch (error) {
    handleError(res, error);
  }
};

export const LoginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body as UserInterface;
    const result = await LoginService(email, password!);
    res.status(200).send(result);
  } catch (error) {
    handleError(res, error);
  }
};
