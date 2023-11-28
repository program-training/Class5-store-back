import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secret = process.env.JWT_SECRET || "secret";

export const generateToken = (id: string, isAdmin = false) => {
  const expiresIn = "1h";
  try {
    const token = jwt.sign({ id, isAdmin }, secret, { expiresIn });
    return token;
  } catch (error) {
    console.error("Error generating token:", error);
    throw error; // Rethrow the error or handle it as needed
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
