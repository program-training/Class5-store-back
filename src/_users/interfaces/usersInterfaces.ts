import { Types } from "mongoose";

export interface UserReqInterface {
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface UserResInterface {
  _id: Types.ObjectId;
  email: string;
  isAdmin: boolean;
  password: string;
}
