import { redisClient } from "./client/client";

export const connectToRedis = async () => {
  try {
    await redisClient.connect();
    return "Successfully Connected To Redis!";
  } catch (error) {
    if (error instanceof Error) return console.log(error.message);
  }
};
