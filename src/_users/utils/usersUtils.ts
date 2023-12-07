import { UserResInterface } from "../interfaces/usersInterfaces";

export const convertUserForSending = (user: UserResInterface) => {
  const { _id, isAdmin, email } = user;
  const id = _id.toString();
  return { _id: id, isAdmin, email };
};
