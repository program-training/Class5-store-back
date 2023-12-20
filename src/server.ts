import express from "express";
import chalk from "chalk";
import cors from "./cors/cors";
import handleErrorMiddleware from "./middlewares/handleErrorMiddleware";
import { expressMiddleware } from "@apollo/server/express4";
import { connectToDatabase } from "./dataAccess/mongoose";
import { connectedToOMS } from "./Orders/dal/orderDal";
import { connectedToERP } from "./products/dal/productsDal";
// import server from "./graphql/apolloServer";
import { connectToRedis } from "./redis/redis";
import { createServer } from "http";
import { WebSocketServer } from "ws";
import BodyParser from "body-parser";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { useServer } from "graphql-ws/lib/use/ws";
import { ApolloServer } from "@apollo/server";
import apolloLogger from "./graphql/logger/apolloLogger";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

export const app = express();
export const httpServer = createServer(app);
const wsServer = new WebSocketServer({
  server: httpServer,
  path: "/graphql",
});
const schema = makeExecutableSchema({ typeDefs, resolvers });
const serverCleanup = useServer({ schema }, wsServer);
const server = new ApolloServer({
  schema,
  plugins: [
    apolloLogger,
    ApolloServerPluginDrainHttpServer({ httpServer }),
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
});

const startApolloServer = async () => {
  await server.start();
  app.use(express.json());
  app.use(cors);
  app.use("/graphql", cors, BodyParser.json(), expressMiddleware(server));
  app.use(handleErrorMiddleware);
  httpServer.listen(5000, () => {
    console.log(chalk.bgGreen(`http://localhost:5000/graphql`));
  });
};

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
      await startApolloServer();
    })
    .catch((error) =>
      console.log(chalk.redBright("Connect to mongoDB Error: ", error.message))
    );
});
