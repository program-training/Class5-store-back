import { admin } from "googleapis/build/src/apis/admin";
import { bool, string } from "joi";

export interface initialUser {
  email: string;
  admin: boolean;
}

export const users: initialUser[] = [
  { email: "lulu1@gmail.com", admin: false },
  { email: "lulu2@gmail.com", admin: false },
  { email: "lulu3@gmail.com", admin: false },
  { email: "lulu4@gmail.com", admin: false },
  { email: "lulu5@gmail.com", admin: false },
  { email: "lulu6@gmail.com", admin: false },
  { email: "lulu7@gmail.com", admin: false },
  { email: "lulu8@gmail.com", admin: false },
  { email: "lulu9@gmail.com", admin: false },
  { email: "lulu10@gmail.com", admin: false },
  { email: "lulu11@gmail.com", admin: false },
  { email: "lulu12@gmail.com", admin: false },
  { email: "lulu13@gmail.com", admin: false },
  { email: "lulu14@gmail.com", admin: false },
  { email: "lulu15@gmail.com", admin: false },
  { email: "lulu16@gmail.com", admin: false },
  { email: "lulu17@gmail.com", admin: false },
  { email: "lulu18@gmail.com", admin: false },
  { email: "lulu19@gmail.com", admin: false },
  { email: "lulu20@gmail.com", admin: false },
];
