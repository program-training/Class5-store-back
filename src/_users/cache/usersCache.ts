// With God's Help

import { NextFunction, Response, Request } from "express";
import { redisClient } from "../../redis/client/client";

export const cacheUsers = async () => {
  try {
    const cachedUsers = await redisClient.json.get("users");
    return cachedUsers && cachedUsers;
  } catch (error) {}
};
