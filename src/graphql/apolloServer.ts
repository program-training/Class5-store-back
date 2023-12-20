// import { ApolloServer } from "@apollo/server";
// import typeDefs from "./typeDefs";
// import resolvers from "./resolvers";
// import apolloLogger from "./logger/apolloLogger";
// import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
// import { makeExecutableSchema } from "@graphql-tools/schema";
// import { useServer } from "graphql-ws/lib/use/ws";
// import { WebSocketServer } from "ws";
// import { app } from "../server";
// import { createServer } from "http";

import { server } from "../server";

// export const httpServer = createServer(app);

// export const wsServer = new WebSocketServer({
//   server: httpServer,
//   path: "/graphql",
// });

// const schema = makeExecutableSchema({ typeDefs, resolvers });
// const serverCleanup = useServer({ schema }, wsServer);
// const server = new ApolloServer({
//   schema,
//   plugins: [
//     apolloLogger,
//     ApolloServerPluginDrainHttpServer({ httpServer }),
//     {
//       async serverWillStart() {
//         return {
//           async drainServer() {
//             await serverCleanup.dispose();
//           },
//         };
//       },
//     },
//   ],
// });

// export default server;

export const connectToApolloServer = async () => {
  try {
    await server.start();
    return "Successfully Connected To ApolloServer!";
  } catch (error) {
    if (error instanceof Error) return console.log(error.message);
  }
};
