import express from "express";
import router from "./router/router";
import chalk from "chalk";
import morgan from "./logger/morgan";
import cors from "./cors/cors";
import handleErrorMiddleware from "./middlewares/handleErrorMiddleware";
const app = express();

app.use(morgan);
app.use(cors);
app.use(express.json());
app.use(router);
app.use(handleErrorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(chalk.blueBright(`Server listening on port: ${PORT}`));
  await connectedToOMS();
  await connectedToERP();
  connectToDatabase()
    .then((message) => console.log(message))
    .catch((error) => console.log(error.message));
});
export default app;

import { connectToDatabase } from "./dataAccess/mongoose";
import { connectedToOMS } from "./Orders/dal/orderDal";
import { connectedToERP } from "./products/dal/productsDal";
import { startStandaloneServer } from "@apollo/server/standalone";
import server from "./graphql/apolloServer";
// import chalk from "chalk";

startStandaloneServer(server, {
  listen: { port: 4000 },
})
  .then(({ url }) => {
    console.log(chalk.blueBright(`server run on: ${url}`));
    connectToDatabase()
      .then(async (message) => {
        await connectedToOMS();
        await connectedToERP();
        console.log(chalk.magentaBright(message));
      })
      .catch((error) =>
        console.log(
          chalk.redBright("Connect to mongoDB Error: ", error.message)
        )
      );
  })
  .catch((error) => console.log(error.message));
