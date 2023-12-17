import { createClient } from "redis";
import { config } from "dotenv";
config();
const {
  REDIS_PASSWORD: PASSWORD,
  REDIS_HOST: HOST,
  REDIS_PORT: PORT,
} = process.env;
export const client = createClient({
  password: PASSWORD,
  socket: {
    host: HOST,
    port: Number(PORT),
  },
});
client.on("error", function (error: Error) {
  console.error(error);
  // I report it onto a logging service like Sentry.
});
