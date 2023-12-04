import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import UserInterface from "../users/interfaces/userInterface";
dotenv.config();

const secret = process.env.JWT_SECRET || "secret";

export const generateToken = ({ _id, isAdmin, email }: UserInterface) => {
  const expiresIn = "1h";
  try {
    const token = jwt.sign({ _id, isAdmin, email }, secret, { expiresIn });
    return token;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const verifyToken = (token: string, secretKey: string) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });
};
