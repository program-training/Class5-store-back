// import express from "express";
// import router from "./router/router";
// import chalk from "chalk";
// import morgan from "./logger/morgan";
// import cors from "./cors/cors";
import { connectToDatabase } from "./dataAccess/mongoose";
// import handleErrorMiddleware from "./middlewares/handleErrorMiddleware";
import { connectedToOMS, getOrderByUserIdFromDB } from "./Orders/dal/orderDal";
import { connectedToERP } from "./products/dal/productsDal";
import handleErrorMiddleware from "./middlewares/handleErrorMiddleware";
import { connectedToOMS, getOrderByUserIdFromDB } from "./Orders/dal/orderDal";
import { connectedToERP } from "./products/dal/productsDal";
import { startStandaloneServer } from "@apollo/server/standalone";
import server from "./graphql/apolloServer";
import { getOrderByUserId } from "./Orders/resolvers/ordersResolvers";
// const app = express();

// // app.use(morgan);
// // app.use(cors);
// // app.use(express.json());
// // app.use(router);
// // app.use(handleErrorMiddleware);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, async () => {
//   console.log(chalk.blueBright(`Server listening on port: ${PORT}`));
//   await connectedToOMS();
//   await connectedToERP();
//   connectToDatabase()
//     .then((message) => console.log(message))
//     .catch((error) => console.log(error.message));
// });
// export default app;
import chalk from "chalk";
import { startStandaloneServer } from "@apollo/server/standalone";
import server from "./graphql/apolloServer";

startStandaloneServer(server, {
  listen: { port: 4000 },
})
  .then(async ({ url }) => {
    console.log(chalk.blueBright(`server run on: ${url}`));
    await connectedToOMS();
    await connectedToERP();

// });

// export default app;
startStandaloneServer(server, {
  listen: { port: 4000 },
})
  .then(({ url }) => {
    console.log(chalk.blueBright(`server run on: ${url}`));
    connectToDatabase()
      .then((message) => {
        console.log(chalk.magentaBright(message));
      })
      .catch((error) =>
        console.log(
          chalk.redBright("Connect to mongoDB Error: ", error.message)
        )
      );
  })
  .catch((error) => console.log(error.message));
