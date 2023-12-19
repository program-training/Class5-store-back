import express from "express";
import chalk from "chalk";
import cors from "./cors/cors";
import handleErrorMiddleware from "./middlewares/handleErrorMiddleware";
import { expressMiddleware } from "@apollo/server/express4";
import { connectToDatabase } from "./dataAccess/mongoose";
import { connectedToOMS } from "./Orders/dal/orderDal";
import { connectedToERP } from "./products/dal/productsDal";
import server from "./graphql/apolloServer";
import { connectToRedis } from "./redis/redis";

import BodyParser from "body-parser";
// import { WebSocketServer } from "ws";

export const app = express();

app.use(cors);
app.use(handleErrorMiddleware);
app.use(express.json());

const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
  // console.log(
  //   mailOptions({ to: "wdwdwd", subject: "93eu", text: "diwhwdnb j" })
  // );

  console.log(chalk.blueBright(`Server listening on port: ${PORT}`));
  connectToRedis()
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
  connectToDatabase()
    .then(async (message) => {
      await connectedToOMS();
      await connectedToERP();
      console.log(chalk.magentaBright(message));
    })
    .then(async () => {
      await server.start().then(() => {
        app.use("/graphql", cors, BodyParser.json(), expressMiddleware(server));
        app.listen(5000);
        console.log(chalk.bgGreen(`http://localhost:5000/graphql`));
      });
    })
    .catch((error) =>
      console.log(chalk.redBright("Connect to mongoDB Error: ", error.message))
    );
});
