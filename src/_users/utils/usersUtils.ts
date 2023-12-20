import { UserResInterface } from "../interfaces/usersInterfaces";

export const convertUserForSending = (user: UserResInterface) => {
  const { _id, isAdmin, email, loginCount } = user;
  const id = _id.toString();
  return { _id: id, isAdmin, email, loginCount };
};

// const pubsub = new PubSub();

// export const convertUserForSending = (user: UserResInterface) => {
//   const { _id, isAdmin, email } = user;
//   const id = _id.toString();
//   const userRegistered = { _id: id, isAdmin, email };
//   pubsub.publish("USER_REGISTER", {
//     userRegister: { ...userRegistered, id: userRegistered._id },
//   });

//   return userRegistered;
// };
