// With God's Help
import { redisClient } from "../../redis/client/client";

export const cacheUsers = async () => {
  try {
    const cachedUsers = await redisClient.json.get("users");
    return cachedUsers && cachedUsers;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};
// export const cacheGetUserByID = async (id:string) => {
//   try {
//     const cachedUsers = await redisClient.json.get("users");
//     if (cachedUsers) {
//       const user = cachedUsers.find(user:userin=>id===user._id)
//     }
//   } catch (error) {
//     if (error instanceof Error) console.log(error.message);
//   }
// };
