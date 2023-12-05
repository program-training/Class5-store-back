import express from "express";
import router from "./router/router";
import chalk from "chalk";
import morgan from "./logger/morgan";
import cors from "./cors/cors";
import { connectToDatabase } from "./dataAccess/mongoose";
import handleErrorMiddleware from "./middlewares/handleErrorMiddleware";
import { connectedToOMS } from "./Orders/dal/orderDal";
import { connectedToERP } from "./products/dal/productsDal";
import { startStandaloneServer } from "@apollo/server/standalone";
import server from "./users/graphql/apolloServer";
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

startStandaloneServer(server, { listen: { port: 5000 } })
  .then(({ url }) => console.log(url))
  .catch((error) => console.log(error));
