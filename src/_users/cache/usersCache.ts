// With God's Help
import { redisClient } from "../../redis/client/client";
import { UserInDBInterface } from "../../utils/convertUser";

export const cacheUsers = async () => {
  try {
    const cachedUsers = await redisClient.json.get("users");
    return cachedUsers && cachedUsers;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};
export const cacheGetUserByID = async (id: string) => {
  try {
    const cachedUsers = (await redisClient.json.get("users")) as
      | UserInDBInterface[]
      | null;
    const user =
      cachedUsers && cachedUsers.find((user) => id === String(user._id));
    return user;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
};
