import { Document, Types } from "mongoose";

export interface UserInDBInterface extends Document {
  _id: Types.ObjectId;
  email: string;
  isAdmin: boolean;
  password?: string | undefined;
}

export const convertUserForSending = (user: UserInDBInterface) => {
  const { _id, isAdmin, email } = user;
  const id = _id.toString();
  return { _id: id, isAdmin, email };
};
