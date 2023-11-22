import express from "express";
import router from "./router/router";
import chalk from "chalk";
import morgan from "./logger/morgan";
import cors from "./cors/cors";
import bodyParser from "body-parser";
import {
  connectToDatabase,
  getAllUsersFromMongoDB,
  getUserById,
  insertUsers,
} from "./dataAccess/mongoose";
import productsRoutes from "./products/routes/productsRoutes";

const app = express();

app.use(morgan);
app.use(cors);
app.use(express.json());
app.use(bodyParser.json());
app.use(router);

const PORT = 3333;
app.listen(PORT, () => {
  console.log(chalk.blueBright(`Server listening on port: ${PORT}`));

  connectToDatabase()
    .then((message) => console.log(message))
    .catch((error) => console.log(error.message));
});
