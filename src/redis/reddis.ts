// With God's Help

import { client } from "./client/client";

export const connectToRedis = async () => {
  try {
    await client.connect();
    return "Successfully Connected To Redis!";
  } catch (error) {
    if (error instanceof Error) return console.log(error.message);
  }
};
