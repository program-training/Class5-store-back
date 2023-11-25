import {
  getUserByIdService,
  getUsersService,
  registerUserService,
} from "../services/usersService";
import { handleError } from "../../utils/handleErrors";
import userValidation from "../models/joi/userValidation";
import { Request, Response } from "express";
import UserInterface from "../interfaces/userInterface";

export const  getUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getUsersService();
    return res.send(users);
  } catch (error) {
    handleError(res, error);
  }
};
export const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const { id: userId } = req.params;
    const user = await getUserByIdService(userId);
    return res.send(user);
  } catch (error) {
    handleError(res, error);
  }
};

export const registerUserController = async (req: Request, res: Response) => {
  try {
    const user: UserInterface = req.body;
    const { error } = userValidation(user);
    if (error?.details[0].message) throw new Error(error?.details[0].message);
    const userFromDB = await registerUserService(user);
    return res.status(200).send(userFromDB);
  } catch (error) {
    if (error instanceof Error) handleError(res, error);
  }
};
