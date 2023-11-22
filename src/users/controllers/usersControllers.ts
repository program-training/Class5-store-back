import UserInterface from "../interfaces/UserInterface";
import {
  getUserById, registerUser
} from "../services/usersApiService";
import { handleError } from "../../utils/handleErrors";
import userValidation from "../models/joi/userValidation";
import { Request, Response } from "express";


export const handleGetUser = async (req: Request, res: Response) => {
  try {
    const { id: userId } = req.params;
    const user = await getUserById(userId);
    return res.send(user);
  } catch (error) {
    handleError(res, error);
  }
};

export const handleUserRegistration = async (req: Request, res: Response) => {
  try {
    const user: UserInterface = req.body;
    const { error } = userValidation(user);
    if (error?.details[0].message) throw new Error(error?.details[0].message);
    const userFromDB = await registerUser(user);
    return res.status(201).send(userFromDB);
  } catch (error) {
    if (error instanceof Error) handleError(res, error);
  }
};

